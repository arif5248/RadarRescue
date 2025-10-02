import { MapPin, Navigation, Users, Phone, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mapLegend from '@/assets/map-legend.png';
import feniMap from '@/assets/feni-map.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

export const ShelterAndZones = () => {
  const { t } = useLanguage();
  const shelters = [
    { 
      name: 'Feni Government College', 
      distance: '0.8', 
      capacity: 500, 
      available: 320,
      status: 'safe',
      danger: 'Low Risk - High Ground'
    },
    { 
      name: 'Feni Model High School', 
      distance: '1.2', 
      capacity: 300, 
      available: 150,
      status: 'moderate',
      danger: 'Moderate - Near River'
    },
    { 
      name: 'Feni Stadium Complex', 
      distance: '2.1', 
      capacity: 800, 
      available: 620,
      status: 'safe',
      danger: 'Low Risk - Elevated Area'
    },
  ];

  return (
    <section className="mb-8">
      {/* Nearest Shelters - Full Width */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-6 h-6 text-yellow-400" />
          <div>
            <h2 className="text-2xl font-bold">{t.shelter.title}</h2>
            <p className="text-sm text-muted-foreground">{t.shelter.subtitle}</p>
          </div>
        </div>

        {/* Map with Legend */}
        <div className="relative h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
          {/* Map Background */}
          <img 
            src={feniMap} 
            alt="Feni District Map" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay gradient for better marker visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />
          
          {/* Map Legend */}
          <div className="absolute top-4 left-4 z-10">
            <img 
              src={mapLegend} 
              alt="Map Legend" 
              className="w-48 rounded-lg shadow-lg"
            />
          </div>

          {/* Location markers */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Shelter 1 - Safe */}
            <div className="absolute top-1/4 right-1/3 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg animate-pulse border-2 border-white">
              <MapPin className="w-6 h-6 text-gray-900" />
            </div>
            
            {/* Shelter 2 - Moderate */}
            <div className="absolute top-1/2 left-1/3 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg border-2 border-white">
              <MapPin className="w-6 h-6 text-gray-900" />
            </div>
            
            {/* Shelter 3 - Safe */}
            <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg border-2 border-white">
              <MapPin className="w-6 h-6 text-gray-900" />
            </div>
            
            {/* User location - Safe Location (Green) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg pulse-glow border-2 border-white">
              <Navigation className="w-5 h-5 text-white" />
            </div>

            {/* Flood Zone marker (Blue) */}
            <div className="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full bg-blue-500 shadow-lg border-2 border-white" />
            
            {/* Danger Area marker (Red) */}
            <div className="absolute top-1/3 left-1/2 w-8 h-8 rounded-full bg-red-500 shadow-lg border-2 border-white" />
          </div>
        </div>

        {/* Shelter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {shelters.map((shelter, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border shadow-sm hover:shadow-md transition-all p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-sm mb-1 leading-tight">{shelter.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span>{t.shelter.distance}: {shelter.distance} km</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>

              {/* Danger Status */}
              <div className={`flex items-center gap-2 mb-3 p-2 rounded-md ${
                shelter.status === 'safe' 
                  ? 'bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900' 
                  : 'bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900'
              }`}>
                {shelter.status === 'safe' ? (
                  <Shield className="w-3 h-3 text-green-600 dark:text-green-400" />
                ) : (
                  <AlertTriangle className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                )}
                <span className={`text-xs font-medium ${
                  shelter.status === 'safe' 
                    ? 'text-green-700 dark:text-green-300' 
                    : 'text-orange-700 dark:text-orange-300'
                }`}>
                  {shelter.danger}
                </span>
              </div>

              {/* Capacity */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded p-2">
                  <div className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 mb-1">
                    <Users className="w-3 h-3" />
                    <span>{t.shelter.capacity}</span>
                  </div>
                  <div className="text-lg font-bold text-blue-700 dark:text-blue-300">{shelter.capacity}</div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 rounded p-2">
                  <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400 mb-1">
                    <Users className="w-3 h-3" />
                    <span>{t.shelter.available}</span>
                  </div>
                  <div className="text-lg font-bold text-green-700 dark:text-green-300">{shelter.available}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-xs h-8">
                  <Navigation className="w-3 h-3 mr-1" />
                  {t.shelter.getDirections}
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Phone className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
