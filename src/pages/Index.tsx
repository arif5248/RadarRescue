import { useState, useEffect } from 'react'
import { SpaceBackground } from '@/components/SpaceBackground'
import { DashboardHeader } from '@/components/DashboardHeader'
import { CurrentSituation } from '@/components/CurrentSituation'
import { PredictionsForecast } from '@/components/PredictionsForecast'
import { ShelterAndZones } from '@/components/ShelterAndZones'
import { FamilyCheck } from '@/components/FamilyCheck'
import { EmergencyContacts } from '@/components/EmergencyContacts'
import { SafetyPrecautions } from '@/components/SafetyPrecautions'
import { Footer } from '@/components/Footer'
import { WaterDropIntro } from '@/components/WaterDropIntro'
import { Hero3D } from '@/components/3d/Hero3D'

const Index = () => {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* {showIntro && <WaterDropIntro />} */}
      {showIntro && <Hero3D />}
      <div
        className={`min-h-screen relative transition-opacity duration-1000 ${
          showIntro ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <SpaceBackground />

        <div className='relative z-10 container mx-auto px-4 py-8 max-w-7xl'>
          {/* <DashboardHeader />  */}
          <CurrentSituation />
          <PredictionsForecast />
          <ShelterAndZones />
          <FamilyCheck />
          <EmergencyContacts />
          <SafetyPrecautions />

          <Footer />
        </div>
      </div>
    </>
  )
}

export default Index
