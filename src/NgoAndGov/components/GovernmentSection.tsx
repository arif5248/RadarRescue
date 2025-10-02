import { Button } from '../components/ui/button'
import { useLanguage } from '../contexts/LanguageContext'
import { FeatureCard } from './FeatureCard'
import { Activity, AlertTriangle, MessageSquare, Zap } from 'lucide-react'
import governmentImg from '../assets/government.jpg'

export const GovernmentSection = () => {
  const { t } = useLanguage()

  return (
    <section id='government' className='py-20 water-gradient'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold mb-2 text-primary-foreground'>
                🔹 {t('government.title')}
              </h2>
              <p className='text-xl text-cyan-glow font-semibold'>
                {t('government.subtitle')}
              </p>
            </div>

            <div className='space-y-4'>
              <FeatureCard
                icon={Activity}
                title={t('government.feature1')}
                description='Real-time satellite monitoring with 3D flood zone visualization'
              />
              <FeatureCard
                icon={AlertTriangle}
                title={t('government.feature2')}
                description='AI-powered predictive analytics for next 72 hours'
              />
              <FeatureCard
                icon={MessageSquare}
                title={t('government.feature3')}
                description='Crowdsourced updates from citizens in both languages'
              />
              <FeatureCard
                icon={Zap}
                title={t('government.feature4')}
                description='Automated early warning and resource allocation system'
              />
            </div>

            <div className='p-6 rounded-xl bg-primary-foreground/10 border border-cyan-glow/30'>
              <p className='text-lg font-semibold text-primary-foreground'>
                💡 {t('government.impact')}
              </p>
            </div>

            <Button
              size='lg'
              className='bg-cyan-glow hover:bg-cyan-glow/90 text-ocean-deep'
            >
              {t('common.get_started')}
            </Button>
          </div>

          <div>
            <img
              src={governmentImg}
              alt='Government operations center'
              className='rounded-2xl shadow-2xl border-2 border-cyan-glow/30 w-full'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
