import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { situation } = await req.json();
    
    if (!situation) {
      return new Response(
        JSON.stringify({ error: 'Situation is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Generating hypothesis for:', situation);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are an environmental research AI that generates detailed hypotheses about climate and environmental changes. 
            
For each scenario, provide:
1. Current State Analysis: Explain what's happening now with specific data points and trends
2. Future Predictions: Project what will happen if trends continue with timeframes and percentages
3. Risk Levels: Assess risks as "low", "medium", or "high"
4. Categories: Tag with relevant categories like "Land Cover Loss", "Rainfall Pattern Shift", "Urbanization", "Climate Change", etc.

Format your response as JSON with this exact structure:
{
  "currentAnalysis": {
    "title": "Why does this place look like this now?",
    "description": "Detailed explanation with specific percentages and trends",
    "tags": ["Category1", "Category2", "Category3"]
  },
  "futureProjection": {
    "title": "What will happen if this continues?",
    "description": "Detailed projection with specific timeframes and percentages",
    "risks": [
      {
        "level": "high|medium|low",
        "description": "Specific risk description"
      }
    ],
    "confidence": "Percentage confidence based on data"
  }
}

Be specific with numbers, percentages, and timeframes. Use real environmental science principles.`
          },
          {
            role: 'user',
            content: situation
          }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Payment required. Please add credits to your workspace.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No content in AI response');
    }

    console.log('AI Response received');

    // Parse the JSON response from the AI
    let hypothesis;
    try {
      // Try to extract JSON from code blocks if present
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
      const jsonString = jsonMatch ? jsonMatch[1].trim() : content.trim();
      hypothesis = JSON.parse(jsonString);
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      // If parsing fails, create a structured response from the text
      hypothesis = {
        currentAnalysis: {
          title: "Why does this place look like this now?",
          description: content.substring(0, 500),
          tags: ["Analysis", "Environmental"]
        },
        futureProjection: {
          title: "What will happen if this continues?",
          description: "Analysis based on current trends",
          risks: [{ level: "medium", description: "Environmental impact" }],
          confidence: "Based on available data"
        }
      };
    }

    return new Response(
      JSON.stringify({ hypothesis }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error in generate-hypothesis function:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
