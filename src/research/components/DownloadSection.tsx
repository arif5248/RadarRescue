import { Download, Radar, Cloud, FileSpreadsheet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  const datasets = [
    {
      title: "SAR Data",
      description: "High-resolution synthetic aperture radar imagery and analysis",
      icon: Radar,
      color: "cyan",
      glowClass: "shadow-glow-cyan hover:border-cyan/50",
    },
    {
      title: "Rainfall Data",
      description: "Comprehensive precipitation records and forecasting models",
      icon: Cloud,
      color: "orange",
      glowClass: "shadow-[0_0_20px_hsl(14_100%_60%/0.3)] hover:border-orange/50",
    },
    {
      title: "Change Detection",
      description: "CSV files with land use changes and flood pattern analysis",
      icon: FileSpreadsheet,
      color: "green",
      glowClass: "shadow-[0_0_20px_hsl(158_64%_52%/0.3)] hover:border-green/50",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {datasets.map((dataset, index) => (
        <Card
          key={index}
          className={`border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--cyan)/0.6)] hover:border-cyan/50 ${dataset.glowClass}`}
        >
          <CardHeader>
            <div className={`mb-2 inline-flex rounded-lg bg-${dataset.color}/20 p-3`}>
              <dataset.icon className={`h-6 w-6 text-${dataset.color}`} />
            </div>
            <CardTitle className="text-foreground">{dataset.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">{dataset.description}</p>
            <Button
              variant="outline"
              className={`w-full border-${dataset.color}/30 bg-${dataset.color}/5 text-foreground hover:bg-${dataset.color}/10`}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Dataset
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DownloadSection;
