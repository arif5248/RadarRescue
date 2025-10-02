import { Layers, Satellite, CloudRain, Waves, Trees } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";

const DataLayers = () => {
  const [layers, setLayers] = useState({
    sar: true,
    rainfall: true,
    flood: true,
    deforestation: true,
  });

  const dataLayers = [
    {
      id: "sar",
      label: "SAR Backscatter",
      icon: Satellite,
      iconColor: "text-cyan",
      toggleColor: "data-[state=checked]:bg-cyan",
      glowColor: "shadow-[0_0_15px_hsl(var(--cyan)/0.6)]",
      tooltip: "Satellite radar backscatter data",
    },
    {
      id: "rainfall",
      label: "Rainfall Heatmap",
      icon: CloudRain,
      iconColor: "text-orange-500",
      toggleColor: "data-[state=checked]:bg-orange-500",
      glowColor: "shadow-[0_0_15px_rgba(249,115,22,0.6)]",
      tooltip: "Rain intensity patterns",
    },
    {
      id: "flood",
      label: "Flood Overlay",
      icon: Waves,
      iconColor: "text-green-500",
      toggleColor: "data-[state=checked]:bg-green-500",
      glowColor: "shadow-[0_0_15px_rgba(34,197,94,0.6)]",
      tooltip: "Predicted/observed flood spread",
    },
    {
      id: "deforestation",
      label: "Deforestation Map",
      icon: Trees,
      iconColor: "text-purple-500",
      toggleColor: "data-[state=checked]:bg-purple-500",
      glowColor: "shadow-[0_0_15px_rgba(168,85,247,0.6)]",
      tooltip: "Forest loss over time",
    },
  ];

  return (
    <Card className="relative border-cyan/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--cyan)/0.4)] hover:border-cyan/40 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent rounded-lg pointer-events-none"></div>
      <CardHeader className="pb-6 relative">
        <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
          <div className="rounded-full bg-cyan/20 p-3 shadow-[0_0_20px_hsl(var(--cyan)/0.4)]">
            <Layers className="h-6 w-6 text-cyan" />
          </div>
          Data Layers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 relative">
        <TooltipProvider>
          {dataLayers.map((layer) => {
            const isActive = layers[layer.id as keyof typeof layers];
            return (
              <Tooltip key={layer.id}>
                <TooltipTrigger asChild>
                  <div className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 hover:bg-white/5 ${isActive ? 'bg-white/[0.02]' : ''}`}>
                    <Label
                      htmlFor={layer.id}
                      className="flex items-center gap-4 text-lg text-foreground cursor-pointer"
                    >
                      <layer.icon className={`h-6 w-6 ${layer.iconColor} transition-all duration-300`} />
                      <span className="font-medium">{layer.label}</span>
                    </Label>
                    <Switch
                      id={layer.id}
                      checked={isActive}
                      onCheckedChange={(checked) =>
                        setLayers((prev) => ({ ...prev, [layer.id]: checked }))
                      }
                      className={`${layer.toggleColor} ${isActive ? layer.glowColor : ''} scale-125 transition-all duration-300`}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-card/95 backdrop-blur-sm border-cyan/30">
                  <p className="text-sm">{layer.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};

export default DataLayers;
