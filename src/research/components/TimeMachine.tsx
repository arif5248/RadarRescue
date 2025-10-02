import { Clock, Calendar, Play, Satellite, TrendingDown, TrendingUp, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

const TimeMachine = () => {
  const [year, setYear] = useState(2025);
  const [date, setDate] = useState("2025-10-03");
  const [time, setTime] = useState("06:00");
  const [slideKey, setSlideKey] = useState(0);

  const years = Array.from({ length: 21 }, (_, i) => 2015 + i); // 2015 to 2035
  const yearIndex = years.indexOf(year);

  useEffect(() => {
    setSlideKey(prev => prev + 1);
  }, [year]);

  const generateAnalysis = (selectedYear: number) => {
    const progress = (selectedYear - 2015) / 20;
    const forestCover = Math.round(78 - (50 * progress));
    const waterBodies = Math.round(12 + (26 * progress));
    const urbanArea = Math.round(10 + (24 * progress));

    let conclusion = "";
    let forestTrend = "stable";
    let waterTrend = "normal";
    let urbanTrend = "low";

    if (selectedYear <= 2018) {
      forestTrend = "stable";
      waterTrend = "normal";
      urbanTrend = "low";
      conclusion = `Year ${selectedYear} shows relatively stable conditions with ${forestCover}% forest coverage. Minimal changes in urban development and water body distribution.`;
    } else if (selectedYear <= 2022) {
      forestTrend = "warning";
      waterTrend = "warning";
      urbanTrend = "warning";
      conclusion = `Early signs of deforestation detected in ${selectedYear}. Forest cover declining to ${forestCover}% as urbanization begins accelerating. Water bodies expanding by ${waterBodies - 12}% from baseline.`;
    } else if (selectedYear <= 2028) {
      forestTrend = "critical";
      waterTrend = "warning";
      urbanTrend = "high";
      conclusion = `Critical deforestation phase (${selectedYear}). Forest cover dropped to ${forestCover}%, while urban areas expanded to ${urbanArea}%. Increased surface runoff and flood vulnerability detected.`;
    } else {
      forestTrend = "critical";
      waterTrend = "critical";
      urbanTrend = "stable";
      conclusion = `Projected conditions for ${selectedYear} show severe environmental degradation. Only ${forestCover}% forest remains. Water coverage at ${waterBodies}% indicates high seasonal flood risk with 85%+ confidence.`;
    }

    return {
      findings: [
        { icon: Satellite, label: "Forest Cover", value: `${forestCover}%`, trend: forestTrend },
        { icon: TrendingUp, label: "Water Bodies", value: `${waterBodies}%`, trend: waterTrend },
        { icon: AlertCircle, label: "Urban Area", value: `${urbanArea}%`, trend: urbanTrend }
      ],
      conclusion
    };
  };

  const currentAnalysis = generateAnalysis(year);

  return (
    <Card className="border-purple/30 bg-card/80 backdrop-blur-sm shadow-glow-purple transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--cyan)/0.6)] hover:border-cyan/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <div className="rounded-lg bg-purple/20 p-2">
            <Clock className="h-5 w-5 text-purple" />
          </div>
          Time Machine
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Explore historical data and future projections with our advanced temporal analysis tool
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Date and Time Input */}
        <div className="space-y-4 rounded-lg border border-purple/30 bg-purple/5 p-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2 text-foreground">
                <Calendar className="h-4 w-4 text-purple" />
                Date
              </Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border-purple/30 bg-navy-light text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-2 text-foreground">
                <Clock className="h-4 w-4 text-purple" />
                Time
              </Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border-purple/30 bg-navy-light text-foreground"
              />
            </div>
          </div>
        </div>

        {/* Timeline Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-cyan">2015</span>
            <span className="font-bold text-cyan-glow">{year} {year === 2025 ? "(Current)" : year > 2025 ? "(Projection)" : "(Historical)"}</span>
            <span className="text-purple">2035</span>
          </div>
          <Slider
            value={[yearIndex]}
            onValueChange={(value) => setYear(years[value[0]])}
            max={years.length - 1}
            step={1}
            className="[&_[role=slider]]:bg-cyan [&_[role=slider]]:border-cyan [&_[role=slider]]:shadow-glow-cyan"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Historical</span>
            <span>Current</span>
            <span>Future</span>
          </div>
        </div>

        {/* Condition Viewers */}
        <div key={`viewers-${slideKey}`} className="grid gap-4 sm:grid-cols-3 animate-slide-in">
          <div className={`space-y-2 rounded-lg border p-4 transition-all duration-500 ${
            year <= 2018 
              ? 'border-cyan/50 bg-cyan/10 shadow-glow-cyan scale-105' 
              : 'border-cyan/30 bg-cyan/5 opacity-60'
          }`}>
            <h4 className="text-sm font-semibold text-cyan">2015-2018</h4>
            <p className="text-xs text-muted-foreground">Historical Baseline</p>
            <div className="aspect-video rounded bg-cyan/10 border border-cyan/20"></div>
          </div>
          <div className={`space-y-2 rounded-lg border p-4 transition-all duration-500 ${
            year > 2018 && year <= 2028
              ? 'border-cyan/50 bg-cyan/10 shadow-glow-cyan scale-105 animate-glow-pulse' 
              : 'border-cyan/30 bg-cyan/5 opacity-60'
          }`}>
            <h4 className="text-sm font-semibold text-cyan-glow">2019-2028</h4>
            <p className="text-xs text-cyan-glow">Transition Period</p>
            <div className="aspect-video rounded bg-cyan/20 border border-cyan/30"></div>
          </div>
          <div className={`space-y-2 rounded-lg border p-4 transition-all duration-500 ${
            year > 2028
              ? 'border-purple/50 bg-purple/10 shadow-glow-purple scale-105' 
              : 'border-purple/30 bg-purple/5 opacity-60'
          }`}>
            <h4 className="text-sm font-semibold text-purple">2029-2035</h4>
            <p className="text-xs text-muted-foreground">Future Projection</p>
            <div className="aspect-video rounded bg-purple/10 border border-purple/20"></div>
          </div>
        </div>

        {/* SAR Data Analysis Findings */}
        <div key={`analysis-${slideKey}`} className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan">
            <Satellite className="h-4 w-4" />
            SAR Data Analysis — {year}
          </div>
          
          <div className="grid gap-3 sm:grid-cols-3">
            {currentAnalysis.findings.map((finding, idx) => (
              <div 
                key={idx}
                className={`rounded-lg border p-4 space-y-2 transition-all duration-300 ${
                  finding.trend === 'critical' ? 'border-destructive/30 bg-destructive/5' :
                  finding.trend === 'warning' ? 'border-orange/30 bg-orange/5' :
                  finding.trend === 'high' ? 'border-purple/30 bg-purple/5' :
                  'border-cyan/30 bg-cyan/5'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-2">
                  <finding.icon className={`h-4 w-4 ${
                    finding.trend === 'critical' ? 'text-destructive' :
                    finding.trend === 'warning' ? 'text-orange' :
                    finding.trend === 'high' ? 'text-purple' :
                    'text-cyan'
                  }`} />
                  <span className="text-xs text-muted-foreground">{finding.label}</span>
                </div>
                <p className={`text-2xl font-bold ${
                  finding.trend === 'critical' ? 'text-destructive' :
                  finding.trend === 'warning' ? 'text-orange' :
                  finding.trend === 'high' ? 'text-purple' :
                  'text-cyan'
                }`}>{finding.value}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className={`rounded-lg border p-4 space-y-2 ${
            year === 2035 ? 'border-destructive/30 bg-gradient-to-br from-destructive/10 to-orange/5' :
            year === 2025 ? 'border-orange/30 bg-gradient-to-br from-orange/10 to-purple/5' :
            'border-cyan/30 bg-gradient-to-br from-cyan/10 to-blue/5'
          }`}>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <div className={`rounded-full p-1 ${
                year === 2035 ? 'bg-destructive/20' :
                year === 2025 ? 'bg-orange/20' :
                'bg-cyan/20'
              }`}>
                <AlertCircle className={`h-4 w-4 ${
                  year === 2035 ? 'text-destructive' :
                  year === 2025 ? 'text-orange' :
                  'text-cyan'
                }`} />
              </div>
              <span className="text-foreground">Conclusion</span>
            </div>
            <p className="text-sm leading-relaxed text-foreground">
              {currentAnalysis.conclusion}
            </p>
          </div>
        </div>

        {/* Animate Button */}
        <Button className="w-full bg-purple hover:bg-purple-dark text-foreground shadow-glow-purple">
          <Play className="mr-2 h-4 w-4" />
          Animate Time Series
        </Button>
      </CardContent>
    </Card>
  );
};

export default TimeMachine;
