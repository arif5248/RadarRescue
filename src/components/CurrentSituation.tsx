import {
  Waves,
  CloudRain,
  AlertTriangle,
  CheckCircle2,
  Droplets,
  Wind,
  Eye,
} from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { useLanguage } from '@/contexts/LanguageContext'

import floodAerial from '@/assets/flood-aerial.png'

export const CurrentSituation = () => {
  const { t } = useLanguage()
  // Water level data for different divisions
  const divisions = [
    {
      nameKey: 'feni' as const,
      level: 85,
      status: 'rising',
      icon: '⚠️',
      messageKey: 'rising' as const,
    },
  ]

  // Find the highest risk level to determine overall safety message
  const maxLevel = Math.max(...divisions.map((d) => d.level))
  const isHighRisk = maxLevel >= 80

  return (
    <section className='mb-8'>
      {/* Hero Section with Flood Background */}
      <div className='relative h-[350px]'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${floodAerial})` }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background' />
        </div>

        <div className='relative z-10 h-full flex flex-col justify-center p-8'>
          <div className='space-y-4 max-w-3xl'>
            <h1 className='text-5xl md:text-6xl font-bold glow-text'>
              {t.header.heroTitle}
            </h1>
            <p className='text-xl text-foreground/90 leading-relaxed'>
              {t.header.heroSubtitle}
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-3 mb-6'>
        <AlertTriangle className='w-6 h-6 text-primary' />
        <h2 className='text-2xl font-bold glow-text'>
          {t.currentSituation.title}
        </h2>
      </div>

      <div className='holo-card p-8 float-animation'>
        {/* Header */}
        <div className='flex items-center gap-3 mb-6'>
          <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center pulse-glow'>
            <Waves className='w-8 h-8 text-cyan-400' />
          </div>
          <h3 className='text-2xl font-bold'>🛰️ Current Flood Status</h3>
        </div>

        {/* Water Level Status - Multiple Divisions */}
        <div className='mb-8'>
          <div className='flex items-center gap-3 mb-4'>
            <Droplets className='w-5 h-5 text-cyan-400' />
            <h4 className='font-semibold text-lg'>
              {t.currentSituation.floodStatus}
            </h4>
          </div>

          <div className='grid grid-cols-1 gap-4'>
            {divisions.map((division) => (
              <div
                key={division.nameKey}
                className='glass-card p-5 rounded-lg border border-primary/20'
              >
                <div className='flex items-center justify-between mb-3'>
                  <span className='font-semibold text-foreground'>
                    {t.currentSituation.divisions[division.nameKey]}
                  </span>
                  <span className='text-2xl font-bold text-cyan-400'>
                    {division.level}%
                  </span>
                </div>

                <Progress
                  value={division.level}
                  className='h-3 mb-3'
                  style={
                    {
                      '--progress-background':
                        division.level >= 80
                          ? 'hsl(var(--destructive))'
                          : division.level >= 60
                          ? 'hsl(var(--warning))'
                          : 'hsl(var(--primary))',
                    } as React.CSSProperties
                  }
                />

                <p className='text-sm text-foreground/80'>
                  {division.icon}{' '}
                  {t.currentSituation.messages[division.messageKey]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Update - Google Style */}
        <div className='glass-card p-6 rounded-lg border border-primary/20 mb-8'>
          <div className='flex items-center gap-3 mb-4'>
            <CloudRain className='w-5 h-5 text-blue-400' />
            <h4 className='font-semibold text-lg'>
              {t.currentSituation.weatherUpdate}
            </h4>
          </div>

          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div>
              <p className='text-sm text-muted-foreground mb-1'>
                {t.currentSituation.today} – {t.currentSituation.divisions.feni}
              </p>
              <div className='flex items-center gap-3 mb-2'>
                <span className='text-3xl'>🌧️</span>
                <div>
                  <p className='text-xl font-bold'>
                    {t.currentSituation.heavyRain}
                  </p>
                  <p className='text-2xl font-semibold text-cyan-400'>
                    29°C{' '}
                    <span className='text-sm text-muted-foreground'>
                      ({t.currentSituation.feelsLike} 31°C)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 text-sm'>
              <div className='flex items-center gap-2'>
                <Droplets className='w-4 h-4 text-blue-400' />
                <span>
                  {t.currentSituation.humidity}: <strong>85%</strong>
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <Wind className='w-4 h-4 text-cyan-400' />
                <span>
                  {t.currentSituation.wind}: <strong>12 km/h SE</strong>
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <Eye className='w-4 h-4 text-purple-400' />
                <span>
                  {t.currentSituation.visibility}: <strong>5 km</strong>
                </span>
              </div>
            </div>
          </div>

          <div className='mt-4 pt-4 border-t border-primary/20'>
            <p className='text-sm text-foreground/90'>
              <span className='font-semibold'>
                {t.currentSituation.next12hrs}
              </span>{' '}
              {t.currentSituation.continuousRain}
            </p>
          </div>
        </div>

        {/* Safety Message */}
        <div
          className={`p-6 rounded-xl border-2 ${
            isHighRisk
              ? 'bg-destructive/10 border-destructive/30'
              : 'bg-green-500/10 border-green-500/30'
          }`}
        >
          <div className='flex items-start gap-4'>
            {isHighRisk ? (
              <>
                <AlertTriangle className='w-8 h-8 text-destructive flex-shrink-0 animate-pulse' />
                <div>
                  <h4 className='text-xl font-bold text-destructive mb-2'>
                    {t.currentSituation.safetyMessage}
                  </h4>
                  <p className='text-lg text-foreground/90'>
                    {t.currentSituation.floodLikely}
                  </p>
                </div>
              </>
            ) : (
              <>
                <CheckCircle2 className='w-8 h-8 text-green-500 flex-shrink-0' />
                <div>
                  <h4 className='text-xl font-bold text-green-500 mb-2'>
                    {t.currentSituation.safetyMessage}
                  </h4>
                  <p className='text-lg text-foreground/90'>
                    {t.currentSituation.safeForNow}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Last Updated */}
        <p className='text-xs text-muted-foreground mt-6 text-center'>
          {t.currentSituation.lastUpdated} 2 {t.currentSituation.ago}
        </p>
      </div>
    </section>
  )
}
