import { Button } from '../components/ui/button'
import { useLanguage } from '../contexts/LanguageContext'
import { FeatureCard } from './FeatureCard'
import { Microscope, Database, TrendingUp, Download } from 'lucide-react'
import researchersImg from '../assets/researchers.jpg'

export const ResearchersSection = () => {
  const { t } = useLanguage()

  return (
    <section id='researchers' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='order-2 md:order-1'>
            <img
              src={researchersImg}
              alt='Researchers analyzing data'
              className='rounded-2xl shadow-2xl border-2 border-cyan-glow/30 w-full'
            />
          </div>

          <div className='order-1 md:order-2 space-y-6'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold mb-2 text-ocean-blue'>
                🔹 {t('researchers.title')}
              </h2>
              <p className='text-xl text-cyan-glow font-semibold'>
                {t('researchers.subtitle')}
              </p>
            </div>

            <div className='space-y-4'>
              <FeatureCard
                icon={TrendingUp}
                title={t('researchers.feature1')}
                description='Visualize water expansion in stunning 3D SAR change detection maps'
              />
              <FeatureCard
                icon={Database}
                title={t('researchers.feature2')}
                description='Access comprehensive datasets all in one place'
              />
              <FeatureCard
                icon={Microscope}
                title={t('researchers.feature3')}
                description='Test hypotheses and forecast impacts with advanced simulation'
              />
              <FeatureCard
                icon={Download}
                title={t('researchers.feature4')}
                description='Export and analyze without writing a single line of code'
              />
            </div>

            <div className='p-6 rounded-xl bg-cyan-glow/10 border border-cyan-glow/30'>
              <p className='text-lg font-semibold text-cyan-glow'>
                💡 {t('researchers.impact')}
              </p>
            </div>

            <Button size='lg' className='bg-ocean-blue hover:bg-ocean-blue/90'>
              {t('common.learn_more')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
