import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingDown, TrendingUp, Minus, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FutureSimulation = () => {
  const [selectedYear, setSelectedYear] = useState(2030);
  const { toast } = useToast();
  
  const generatePredictions = (year: number) => {
    const yearsAhead = year - 2025;
    const multiplier = yearsAhead / 5;
    
    return [
      {
        category: "Economy",
        impact: multiplier > 1.5 ? "critical" : "negative",
        value: `${-(12.5 * multiplier).toFixed(1)}%`,
        description: "GDP reduction due to environmental damage",
      },
      {
        category: "Food Security",
        impact: "critical",
        value: `${-(35 * multiplier).toFixed(1)}%`,
        description: "Agricultural yield decline in affected regions",
      },
      {
        category: "Livelihoods",
        impact: multiplier > 1.5 ? "critical" : "negative",
        value: `${-(18 * multiplier).toFixed(1)}%`,
        description: "Employment loss in resource-dependent sectors",
      },
    ];
  };

  const predictions = generatePredictions(selectedYear);

  const handleTakeAction = () => {
    toast({
      title: "Take Action Now",
      description: "Implementing sustainable practices can help prevent this crisis. Contact local authorities and environmental agencies.",
    });
  };

  const getImpactStyles = (impact: string) => {
    switch (impact) {
      case "critical":
        return {
          border: "border-red-500/50",
          bg: "bg-red-500/10",
          text: "text-red-400",
          glow: "shadow-glow-red",
        };
      case "negative":
        return {
          border: "border-orange-500/50",
          bg: "bg-orange-500/10",
          text: "text-orange-400",
          glow: "shadow-glow-orange",
        };
      default:
        return {
          border: "border-cyan/50",
          bg: "bg-cyan/10",
          text: "text-cyan",
          glow: "shadow-glow-cyan",
        };
    }
  };

  const getImpactIcon = (impact: string) => {
    if (impact === "critical" || impact === "negative") {
      return <TrendingDown className="h-5 w-5" />;
    }
    return <Minus className="h-5 w-5" />;
  };

  return (
    <Card className="border-cyan/30 bg-card/50 backdrop-blur-sm shadow-glow-cyan transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--cyan)/0.6)] hover:border-cyan/50">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-cyan">Future Simulation</CardTitle>
        <CardDescription className="text-muted-foreground">
          Predicted effects on key indicators
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="year-input" className="text-foreground">Select Target Year</Label>
          <Input
            id="year-input"
            type="number"
            min="2025"
            max="2050"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="border-cyan/30 focus:border-cyan"
          />
        </div>

        <div className="space-y-4">
        {predictions.map((prediction, index) => {
          const styles = getImpactStyles(prediction.impact);
          return (
            <div
              key={prediction.category}
              className={`rounded-lg border ${styles.border} ${styles.bg} ${styles.glow} p-4 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-foreground">{prediction.category}</h4>
                <div className={`flex items-center gap-1 ${styles.text}`}>
                  {getImpactIcon(prediction.impact)}
                  <span className="font-bold">{prediction.value}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{prediction.description}</p>
            </div>
          );
        })}
        </div>

        <div className="pt-4 border-t border-cyan/20">
          <Button
            onClick={handleTakeAction}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold"
          >
            <AlertTriangle className="mr-2 h-4 w-4" />
            Take Action to Prevent This Crisis
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FutureSimulation;
