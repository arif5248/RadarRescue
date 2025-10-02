import { Button } from '../components/ui/button'
import { useLanguage } from '../contexts/LanguageContext'
import { FeatureCard } from './FeatureCard'
import { Target, MapPin, Package, Navigation } from 'lucide-react'
import ngoImg from '../assets/ngo-relief.jpg'

export const NGOSection = () => {
  const { t } = useLanguage()

  return (
    <section id='ngos' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='order-2 md:order-1'>
            <img
              src={ngoImg}
              alt='NGO relief operations'
              className='rounded-2xl shadow-2xl border-2 border-cyan-glow/30 w-full'
            />
          </div>

          <div className='order-1 md:order-2 space-y-6'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold mb-2 text-ocean-blue'>
                🔹 {t('ngos.title')}
              </h2>
              <p className='text-xl text-cyan-glow font-semibold'>
                {t('ngos.subtitle')}
              </p>
            </div>

            <div className='space-y-4'>
              <FeatureCard
                icon={Target}
                title={t('ngos.feature1')}
                description='AI identifies high-risk areas where families are trapped'
              />
              <FeatureCard
                icon={MapPin}
                title={t('ngos.feature2')}
                description='Real-time shelter availability and capacity monitoring'
              />
              <FeatureCard
                icon={Package}
                title={t('ngos.feature3')}
                description='3D visualization of boats, supplies, and medical resources'
              />
              <FeatureCard
                icon={Navigation}
                title={t('ngos.feature4')}
                description='Optimal route planning through flooded areas'
              />
            </div>

            <div className='p-6 rounded-xl bg-cyan-glow/10 border border-cyan-glow/30'>
              <p className='text-lg font-semibold text-cyan-glow'>
                💡 {t('ngos.impact')}
              </p>
            </div>

            <Button size='lg' className='bg-ocean-blue hover:bg-ocean-blue/90'>
              {t('common.get_started')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
