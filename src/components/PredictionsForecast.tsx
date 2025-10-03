import { Calendar, TrendingUp, Droplets, AlertTriangle, MapPin, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const PredictionsForecast = () => {
  const { t } = useLanguage();
  const forecasts = [
    {
      time: '24 Hours',
      date: 'Friday, Oct 3, 2025 — 6:00 AM',
      division: 'Feni Division',
      weather: '🌧️ Heavy continuous rainfall',
      weatherChance: 90,
      condition: 'High risk of flooding in low-lying areas',
      risk: 'High',
      precautions: [
        'Keep emergency bag (documents, dry food, medicine, torch)',
        'Move cattle & valuables to higher ground',
        'Avoid riverside/roadside travel at night',
        'Stay alert for SMS/voice alerts from Flood Guard'
      ],
      shelter: {
        name: 'Feni Govt. High School Shelter',
        distance: '2.4 km',
        capacity: 80
      },
      message: 'Flood is expected on Friday morning. Please prepare and move to the nearest safe shelter if you live in low-lying zones.'
    },
    {
      time: '48 Hours',
      date: 'Saturday, Oct 4, 2025 — 2:00 PM',
      division: 'Feni Division',
      weather: '🌩️ Thunderstorms with heavy rain',
      weatherChance: 85,
      condition: 'River water levels rising rapidly',
      risk: 'High',
      precautions: [
        'Monitor local emergency channels',
        'Prepare evacuation route in advance',
        'Store clean drinking water',
        'Charge mobile phones and backup batteries'
      ],
      shelter: {
        name: 'Feni Central Stadium Shelter',
        distance: '3.1 km',
        capacity: 65
      },
      message: 'Severe flooding likely. Evacuate low-lying areas immediately when authorities issue warnings.'
    },
    {
      time: '72 Hours',
      date: 'Sunday, Oct 5, 2025 — 9:00 AM',
      division: 'Feni Division',
      weather: '⛅ Partly cloudy with scattered showers',
      weatherChance: 45,
      condition: 'Moderate risk in coastal areas',
      risk: 'Medium',
      precautions: [
        'Stay informed about weather updates',
        'Keep emergency contacts handy',
        'Avoid unnecessary travel to flood-prone areas',
        'Check on elderly neighbors'
      ],
      shelter: {
        name: 'Feni College Shelter',
        distance: '1.8 km',
        capacity: 40
      },
      message: 'Weather improving but stay cautious. Flooding risk reduced but not eliminated.'
    },
  ];

  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold glow-text">{t.predictions.title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {forecasts.map((forecast, index) => (
          <div
            key={index}
            className="holo-card p-6 hover:scale-105 transition-transform space-y-4"
          >
            {/* Header with Time and Risk Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-accent">{forecast.time}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                forecast.risk === 'High' 
                  ? 'text-red-400 bg-red-400/10 border border-red-400/20' 
                  : forecast.risk === 'Medium'
                  ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/20'
                  : 'text-green-400 bg-green-400/10 border border-green-400/20'
              }`}>
                {forecast.risk === 'High' ? t.predictions.highRisk : forecast.risk === 'Medium' ? t.predictions.mediumRisk : t.predictions.lowRisk}
              </span>
            </div>

            {/* Date & Division */}
            <div>
              <h3 className="text-lg font-bold">{forecast.division}</h3>
              <p className="text-xs text-muted-foreground">{forecast.date}</p>
            </div>

            {/* Weather Update */}
            <div className="glass-card p-3 space-y-2">
              <p className="text-sm font-semibold">{t.predictions.weatherUpdate}</p>
              <p className="text-sm">{forecast.weather}</p>
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">{t.predictions.chanceOfRain}</span>
                <span className="font-semibold text-accent">{forecast.weatherChance}%</span>
              </div>
            </div>

            {/* Flood Forecast */}
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Droplets className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">{t.predictions.floodForecast}</p>
                  <p className="text-sm font-semibold">{forecast.condition}</p>
                </div>
              </div>
            </div>

            {/* Precautions */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <p className="text-xs font-semibold">{t.predictions.precautions}</p>
              </div>
              <ul className="text-xs space-y-1 pl-6">
                {forecast.precautions.map((precaution, idx) => (
                  <li key={idx} className="text-muted-foreground list-disc">{precaution}</li>
                ))}
              </ul>
            </div>

            {/* Shelter Recommendation */}
            <div className="glass-card p-3 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <p className="text-xs font-semibold">{t.predictions.nearestShelter}</p>
              </div>
              <p className="text-sm font-bold">{forecast.shelter.name}</p>
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">{forecast.shelter.distance} {t.predictions.away}</span>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span className={`font-semibold ${
                    forecast.shelter.capacity > 70 ? 'text-yellow-400' : 'text-green-400'
                  }`}>
                    {forecast.shelter.capacity}% {t.predictions.full}
                  </span>
                </div>
              </div>
            </div>

            {/* Safety Message */}
            <div className={`p-3 rounded-lg border ${
              forecast.risk === 'High'
                ? 'bg-red-400/5 border-red-400/20'
                : forecast.risk === 'Medium'
                ? 'bg-yellow-400/5 border-yellow-400/20'
                : 'bg-green-400/5 border-green-400/20'
            }`}>
              <p className="text-xs leading-relaxed">{forecast.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
