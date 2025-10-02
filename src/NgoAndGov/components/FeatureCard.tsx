import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-cyan-glow/30 bg-card/50 backdrop-blur hover:border-cyan-glow transition-all duration-300 hover:glow-cyan">
      <CardContent className="p-6 flex items-start gap-4">
        <div className="p-3 rounded-lg bg-cyan-glow/20">
          <Icon className="h-6 w-6 text-cyan-glow" />
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};
