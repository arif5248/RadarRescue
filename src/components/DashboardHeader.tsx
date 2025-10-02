import { NavLink } from 'react-router-dom'
import floodAerial from '@/assets/flood-aerial.png'
import { LanguageToggle } from './LanguageToggle'
import { Home, Sparkles, FlaskConical, Shield, Building2 } from 'lucide-react'
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
            <div className='flex items-center gap-8'>
              {/* Home */}
              {/* <NavLink
                to='/'
                className={({ isActive }) =>
                  `${baseLink} ${
                    isActive ? active : 'text-foreground hover:text-primary'
                  }`
                }
              >
                <Home className='w-5 h-5' />
                <span className='font-medium'>Home</span>
              </NavLink> */}

              {/* Brand */}
              <div className='flex items-center gap-2'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? active : inactive}`
                  }
                >
                  <div className='w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center'>
                    <Shield className='w-5 h-5 text-primary' />
                  </div>
                  <span className='text-xl font-bold glow-text'>
                    Flood Alert
                  </span>
                </NavLink>
              </div>

              {/* Primary nav links */}
              <div className='flex items-center gap-6'>
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
            </div>

            <LanguageToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
