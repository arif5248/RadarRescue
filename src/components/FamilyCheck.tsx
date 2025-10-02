import { Users, Shield, MapPin, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const FamilyCheck = () => {
  const { t } = useLanguage();
  
  const familyMembers = [
    { nameKey: 'mother' as const, status: 'safe', locationKey: 'safeZoneA' as const, lastUpdate: 2 },
    { nameKey: 'father' as const, status: 'safe', locationKey: 'shelterB' as const, lastUpdate: 5 },
    { nameKey: 'brother' as const, status: 'risk', locationKey: 'ward3' as const, lastUpdate: 1 },
    { nameKey: 'sister' as const, status: 'safe', locationKey: 'safeZoneC' as const, lastUpdate: 10 },
  ];

  return (
    <section className="mb-8">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">{t.family.title}</h2>
        </div>
        <p className="text-sm text-muted-foreground">{t.family.subtitle}</p>
      </div>

      <div className="holo-card p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {familyMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  member.status === 'safe'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{t.family.members[member.nameKey]}</h3>
                  <p className="text-xs text-muted-foreground">
                    {member.lastUpdate} {t.family.timeAgo.minAgo}
                  </p>
                </div>
              </div>

              <div className={`flex items-center gap-2 p-2 rounded-md mb-2 ${
                member.status === 'safe'
                  ? 'bg-green-500/10'
                  : 'bg-red-500/10'
              }`}>
                {member.status === 'safe' ? (
                  <>
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium text-green-400">{t.family.safe}</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-medium text-red-400">{t.family.atRisk}</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>{t.family.locations[member.locationKey]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
