import { Phone, MessageCircle, Ambulance, Shield, Waves, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const EmergencyContacts = () => {
  const { t } = useLanguage();
  
  const contacts = [
    { nameKey: 'nationalEmergency' as const, number: '999', icon: Shield, color: 'from-red-500 to-red-600' },
    { nameKey: 'fireService' as const, number: '102', icon: Waves, color: 'from-orange-500 to-orange-600' },
    { nameKey: 'ambulance' as const, number: '199', icon: Ambulance, color: 'from-green-500 to-green-600' },
    { nameKey: 'disasterManagement' as const, number: '1090', icon: AlertTriangle, color: 'from-blue-500 to-blue-600' },
  ];

  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Phone className="w-6 h-6 text-primary animate-pulse" />
        <h2 className="text-2xl font-bold glow-text">{t.emergency.title}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <div
              key={index}
              className="holo-card p-5 hover:scale-105 transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center mb-4 pulse-glow`}>
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-bold mb-1">{t.emergency.contacts[contact.nameKey]}</h3>
              <p className="text-2xl font-bold text-primary mb-4">{contact.number}</p>

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className={`flex-1 bg-gradient-to-r ${contact.color} hover:opacity-90 text-white`}
                >
                  <Phone className="w-4 h-4 mr-1" />
                  {t.emergency.call}
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="glass-card hover:border-primary/50"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="holo-card p-5 mt-4 border-yellow-400/20">
        <p className="text-sm text-center">
          💡 <span className="font-semibold">{t.emergency.tip}</span> {t.emergency.tipMessage}
        </p>
      </div>
    </section>
  );
};
