import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ResearchersSection } from '../components/ResearchersSection'
import { GovernmentSection } from '../components/GovernmentSection'
import { NGOSection } from '../components/NGOSection'
import { ShelterMap } from '../components/ShelterMap'
import { Footer } from '../components/Footer'
import { LanguageProvider } from '../contexts/LanguageContext'

const Index = () => {
  console.log('ngoAndGov')
  return (
    <LanguageProvider>
      <div className='min-h-screen'>
        {/* <Header /> */}
        {/* <Hero /> */}
        <GovernmentSection />
        <NGOSection />
        {/* <Footer /> */}
      </div>
    </LanguageProvider>
  )
}

export default Index
