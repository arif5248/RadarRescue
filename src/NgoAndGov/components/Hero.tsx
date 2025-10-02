import { Button } from '../components/ui/button'
import { useLanguage } from '../contexts/LanguageContext'
import { ArrowRight } from 'lucide-react'
import { Globe3D } from './Globe3D'
import heroFlood from '../assets/hero-flood.jpg'

export const Hero = () => {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'
    >
      {/* Background */}
      <div className='absolute inset-0 water-gradient opacity-90' />
      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage: `url(${heroFlood})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className='container mx-auto px-4 py-20 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='text-center md:text-left space-y-6'>
            <div className='inline-block'>
              <h1 className='text-5xl md:text-7xl font-bold text-primary-foreground mb-2 text-glow'>
                💙 {t('hero.title')}
              </h1>
              <h2 className='text-3xl md:text-4xl text-cyan-glow animate-pulse-slow'>
                {t('hero.subtitle')} 🌊
              </h2>
            </div>

            <p className='text-xl md:text-2xl text-primary-foreground/90'>
              {t('hero.description')}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <Button
                size='lg'
                onClick={() => scrollToSection('researchers')}
                className='bg-cyan-glow hover:bg-cyan-glow/90 text-ocean-deep font-bold glow-cyan'
              >
                {t('hero.cta')}
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Globe */}
          <div className='flex items-center justify-center animate-float'>
            <Globe3D />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent' />
    </section>
  )
}
