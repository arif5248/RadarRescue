import { Shield, Backpack, Home, Navigation, Phone, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const SafetyPrecautions = () => {
  const { t } = useLanguage();

  const precautions = [
    {
      titleKey: 'emergencyBag' as const,
      descKey: 'emergencyBagDesc' as const,
      icon: Backpack,
      gradient: 'from-blue-400 to-cyan-400',
      glow: 'shadow-[0_0_30px_rgba(59,130,246,0.5)]',
      emoji: '🎒'
    },
    {
      titleKey: 'moveToSafety' as const,
      descKey: 'moveToSafetyDesc' as const,
      icon: Home,
      gradient: 'from-green-400 to-emerald-400',
      glow: 'shadow-[0_0_30px_rgba(34,197,94,0.5)]',
      emoji: '🏠'
    },
    {
      titleKey: 'avoidRiskyTravel' as const,
      descKey: 'avoidRiskyTravelDesc' as const,
      icon: Navigation,
      gradient: 'from-teal-400 to-cyan-400',
      glow: 'shadow-[0_0_30px_rgba(20,184,166,0.5)]',
      emoji: '🛣️'
    }
  ];

  return (
    <section className="mb-8">
      <div className="flex items-start gap-3 mb-6">
        <div className="relative">
          <Shield className="w-8 h-8 text-green-400 animate-pulse" />
          <div className="absolute inset-0 blur-xl bg-green-400/50 animate-pulse" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            {t.safety.title}
          </h2>
          <p className="text-muted-foreground mt-1">{t.safety.subtitle}</p>
        </div>
      </div>

      {/* Main 3D Glowing Panel */}
      <div className="relative">
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-green-500/20 to-cyan-500/20 rounded-3xl blur-3xl animate-pulse" />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        {/* Main Card */}
        <div className="relative backdrop-blur-xl bg-gradient-to-br from-card/80 via-card/60 to-card/80 rounded-3xl border border-primary/20 shadow-2xl p-8">
          {/* Hologram Effect Lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />
          
          {/* Friendly Helper Message */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-primary/20">
              <Phone className="w-5 h-5 text-cyan-400 animate-pulse" />
              <p className="text-sm text-foreground/90 font-medium">
                {t.safety.helperMessage}
              </p>
            </div>
          </div>

          {/* 3D Precaution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {precautions.map((precaution, index) => {
              const Icon = precaution.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* 3D Card Effect */}
                  <div className={`relative backdrop-blur-md bg-gradient-to-br from-background/40 to-background/20 rounded-2xl border border-border/50 p-6 transition-all duration-500 hover:scale-105 hover:rotate-1 ${precaution.glow} hover:shadow-2xl overflow-hidden`}>
                    {/* Card Background Image Overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="text-9xl flex items-center justify-center h-full">
                        {precaution.emoji}
                      </div>
                    </div>
                    
                    {/* Top Glow Line */}
                    <div className={`absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r ${precaution.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
                    
                    {/* 3D Icon Container */}
                    <div className="relative mb-6 flex justify-center">
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${precaution.gradient} p-0.5 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                        <div className="w-full h-full rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-10 h-10 text-foreground" />
                        </div>
                      </div>
                      {/* Icon Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${precaution.gradient} opacity-20 blur-2xl rounded-full animate-pulse`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="font-bold text-lg mb-3 text-foreground text-center">
                        {t.safety.precautions[precaution.titleKey]}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed text-center">
                        {t.safety.precautions[precaution.descKey]}
                      </p>
                    </div>

                    {/* Bottom Glow Line */}
                    <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r ${precaution.gradient} opacity-30 group-hover:opacity-70 transition-opacity`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Emergency Contact Reminder */}
          <div className="mt-8 flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
            <AlertTriangle className="w-5 h-5 text-yellow-400 animate-pulse" />
            <p className="text-sm text-foreground/80">
              {t.safety.emergencyReminder}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
