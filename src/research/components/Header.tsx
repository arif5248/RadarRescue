import { Waves } from 'lucide-react'
import headerBg from '@/research/assets/header-bg.png'

const Header = () => {
  return (
    <header className='relative border-b border-border/50 backdrop-blur-sm overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center opacity-40'
        style={{ backgroundImage: `url(${headerBg})` }}
      ></div>
      <div className='absolute inset-0 bg-gradient-to-b from-background/60 to-background/80'></div>
      <div className='container relative mx-auto px-4 py-6'>
        <div className='flex items-center gap-3'>
          <div className='rounded-lg bg-cyan/20 p-2 shadow-glow-cyan'>
            <Waves className='h-8 w-8 text-cyan' />
          </div>
          <div>
            <h1 className='text-3xl font-bold tracking-tight text-foreground'>
              Researcher Platform
            </h1>
            <p className='text-sm text-muted-foreground'>
              Advanced data visualization, SAR analysis, and predictive modeling
              tools
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
