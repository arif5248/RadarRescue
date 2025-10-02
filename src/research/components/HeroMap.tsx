import heroMap from '@/research/assets/header-bg.png'

const HeroMap = () => {
  return (
    <div className='relative overflow-hidden rounded-xl border border-cyan/30 bg-card shadow-glow-cyan transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--cyan)/0.6)] hover:border-cyan/50'>
      <div className='absolute inset-0 bg-gradient-hologram animate-hologram opacity-50'></div>
      <img
        src={heroMap}
        alt='Satellite data visualization dashboard showing flood monitoring systems'
        className='h-full w-full object-cover'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent'></div>
    </div>
  )
}

export default HeroMap
