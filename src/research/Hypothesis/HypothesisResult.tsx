import { TrendingUp, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Risk {
  level: "high" | "medium" | "low";
  description: string;
}

interface HypothesisData {
  currentAnalysis: {
    title: string;
    description: string;
    tags: string[];
  };
  futureProjection: {
    title: string;
    description: string;
    risks: Risk[];
    confidence: string;
  };
}

interface HypothesisResultProps {
  hypothesis: HypothesisData;
}

const getRiskColor = (level: string) => {
  switch (level) {
    case "high":
      return "text-accent";
    case "medium":
      return "text-yellow-400";
    case "low":
      return "text-green-400";
    default:
      return "text-muted-foreground";
  }
};

const getTagColor = (tag: string) => {
  const colors = [
    "bg-green-500/20 text-green-400 border-green-500/30",
    "bg-primary/20 text-primary border-primary/30",
    "bg-accent/20 text-accent border-accent/30",
  ];
  return colors[tag.length % colors.length];
};

export const HypothesisResult = ({ hypothesis }: HypothesisResultProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Current Analysis Section */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl blur-xl" />
        <div className="relative bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl p-6 hover:border-primary/50 transition-all">
          <div className="flex items-start gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <h2 className="text-xl font-semibold text-primary">
              {hypothesis.currentAnalysis.title}
            </h2>
          </div>
          
          <p className="text-foreground/90 leading-relaxed mb-4">
            {hypothesis.currentAnalysis.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {hypothesis.currentAnalysis.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`${getTagColor(tag)} border`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Future Projection Section */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-xl blur-xl" />
        <div className="relative bg-card/80 backdrop-blur-sm border border-accent/30 rounded-xl p-6 hover:border-accent/50 transition-all">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
            <h2 className="text-xl font-semibold text-accent">
              {hypothesis.futureProjection.title}
            </h2>
          </div>
          
          <p className="text-foreground/90 leading-relaxed mb-4">
            {hypothesis.futureProjection.description}
          </p>
          
          <div className="space-y-3 mb-4">
            {hypothesis.futureProjection.risks.map((risk, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <div>
                  <span className={`font-semibold ${getRiskColor(risk.level)} capitalize`}>
                    {risk.level} risk
                  </span>
                  <span className="text-foreground/90"> {risk.description}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-sm text-accent/80 font-medium">
            {hypothesis.futureProjection.confidence}
          </div>
        </div>
      </div>
    </div>
  );
};
