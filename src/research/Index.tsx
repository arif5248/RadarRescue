import Header from '@/research/components/Header'
import HeroMap from '@/research/components/HeroMap'
import DataLayers from '@/research/components/DataLayers'
import FutureSimulation from '@/research/components/FutureSimulation'
import TimeMachine from '@/research/components/TimeMachine'
import DownloadSection from '@/research/components/DownloadSection'
import HypothesisSection from '@/research/Hypothesis/Index'

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />

      <main className='container mx-auto px-4 py-8 space-y-8'>
        {/* Hero Map Section */}
        <section className='animate-slide-in'>
          <HeroMap />
        </section>

        {/* Main Content Grid */}
        <div className='grid gap-8 lg:grid-cols-3'>
          {/* Left Column - Data Layers & Future Simulation */}
          <div className='lg:col-span-1 space-y-8'>
            <DataLayers />
            <FutureSimulation />
          </div>

          {/* Right Column - Time Machine */}
          <div className='lg:col-span-2'>
            <TimeMachine />
          </div>
        </div>

        {/* Download Section */}
        <section>
          <DownloadSection />
        </section>

        {/* Hypothesis Section */}
        <section>
          <HypothesisSection />
        </section>
      </main>
    </div>
  )
}

export default Index
