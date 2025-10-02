import { useState } from 'react'
import { Brain } from 'lucide-react'
import { HypothesisSearch } from '@/research/Hypothesis/HypothesisSearch'
import { HypothesisResult } from '@/research/Hypothesis/HypothesisResult'
import { supabase } from '@/research/Hypothesis/integrations/supabase/client'
import { toast } from 'sonner'

const Index = () => {
  const [hypothesis, setHypothesis] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (situation: string) => {
    setIsLoading(true)
    setHypothesis(null)

    try {
      const { data, error } = await supabase.functions.invoke(
        'generate-hypothesis',
        {
          body: { situation },
        }
      )

      if (error) {
        console.error('Error generating hypothesis:', error)

        if (error.message?.includes('Rate limit')) {
          toast.error('Rate limit exceeded. Please try again later.')
        } else if (error.message?.includes('Payment required')) {
          toast.error('Please add credits to continue using AI features.')
        } else {
          toast.error('Failed to generate hypothesis. Please try again.')
        }
        return
      }

      if (data?.hypothesis) {
        setHypothesis(data.hypothesis)
        toast.success('Hypothesis generated successfully!')
      } else {
        toast.error('No hypothesis data received.')
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      toast.error('An unexpected error occurred.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background to-background/95 relative overflow-hidden'>
      {/* Background effects */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent' />

      <div className='relative z-10 container mx-auto px-4 py-12'>
        {/* Header */}
        <div className='text-center mb-12 animate-in fade-in slide-in-from-top duration-700'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <div className='relative'>
              <div className='absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse' />
              <div className='relative bg-primary/20 p-3 rounded-full border border-primary/40'>
                <Brain className='w-8 h-8 text-primary' />
              </div>
            </div>
            <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent'>
              AI Hypothesis Engine
            </h1>
          </div>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
            Enter an environmental scenario and let AI generate detailed
            hypotheses about current conditions and future projections
          </p>
        </div>

        {/* Search */}
        <div className='mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-200'>
          <HypothesisSearch onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className='flex flex-col items-center justify-center gap-4 py-12 animate-in fade-in'>
            <div className='relative'>
              <div className='w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin' />
              <div
                className='absolute inset-0 w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin'
                style={{
                  animationDirection: 'reverse',
                  animationDuration: '1.5s',
                }}
              />
            </div>
            <p className='text-muted-foreground animate-pulse'>
              Generating hypothesis...
            </p>
          </div>
        )}

        {/* Results */}
        {hypothesis && !isLoading && (
          <HypothesisResult hypothesis={hypothesis} />
        )}

        {/* Empty State */}
        {!hypothesis && !isLoading && (
          <div className='text-center py-12 animate-in fade-in delay-300'>
            <div className='text-muted-foreground/60 text-lg mb-2'>
              Start by entering an environmental scenario
            </div>
            <div className='text-sm text-muted-foreground/40'>
              Example: "What if coastal erosion continues at current rates?"
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Index
