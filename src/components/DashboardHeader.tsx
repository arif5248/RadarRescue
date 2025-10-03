import { NavLink } from 'react-router-dom'
import { LanguageToggle } from './LanguageToggle'
import { Sparkles, FlaskConical, Shield, Building2, House } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export const DashboardHeader = () => {
  const { t } = useLanguage()

  const baseLink = 'flex items-center gap-2 transition-colors'
  const inactive = 'text-foreground/70 hover:text-primary'
  const active = 'text-primary'

  return (
    <header className='relative overflow-hidden rounded-3xl mb-8'>
      {/* Navigation Bar */}
      <nav className='relative z-20 bg-background/95 backdrop-blur-lg border-b border-border'>
        <div className='px-8 py-4'>
          <div className='flex items-center justify-between'>

            {/* Left: Brand */}
            <div className='flex items-center gap-2'>
              <div className='w-12 h-12 flex items-center justify-center'>
                <img src='/src/assets/logo.png' alt='Logo' className='w-10 h-10 object-contain' />
              </div>
              <span className='text-xl font-bold glow-text'>
                Radar Rescue
              </span>
            </div>

            {/* Center: Nav Links */}
            <div className='flex items-center gap-12 nav-center-offset'>

              <NavLink
                to='/'
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? active : inactive}`
                }
              >
                <Shield className='w-5 h-5' />
                <span className='font-medium'>Flood Alert</span>
              </NavLink>

              <NavLink
                to='/research'
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? active : inactive}`
                }
              >
                <FlaskConical className='w-5 h-5' />
                <span className='font-medium'>Research</span>
              </NavLink>

              <NavLink
                to='/kidsGame'
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? active : inactive}`
                }
              >
                <Sparkles className='w-5 h-5' />
                <span className='font-medium'>Kids Zone</span>
              </NavLink>

              <NavLink
                to='/ngoAndGov'
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? active : inactive}`
                }
              >
                <Building2 className='w-5 h-5' />
                <span className='font-medium'>Government &amp; NGO</span>
              </NavLink>
            </div>

            {/* Right: Language Toggle */}
            <LanguageToggle />

          </div>
        </div>
      </nav>
    </header>
  )
}