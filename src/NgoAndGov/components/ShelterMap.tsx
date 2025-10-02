import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '../components/ui/badge'
import { useLanguage } from '../contexts/LanguageContext'
import { MapPin, Users } from 'lucide-react'
import shelterImg from '../assets/shelter.jpg'

interface Shelter {
  id: number
  name: string
  nameBn: string
  status: 'safe' | 'capacity' | 'unsafe'
  distance: string
  capacity: string
  lat: number
  lng: number
}

const shelters: Shelter[] = [
  {
    id: 1,
    name: 'Dhaka Central Shelter',
    nameBn: 'ঢাকা কেন্দ্রীয় আশ্রয়কেন্দ্র',
    status: 'safe',
    distance: '2.5 km',
    capacity: '450/800',
    lat: 23.8103,
    lng: 90.4125,
  },
  {
    id: 2,
    name: 'Mirpur Community Center',
    nameBn: 'মিরপুর কমিউনিটি সেন্টার',
    status: 'safe',
    distance: '3.8 km',
    capacity: '320/600',
    lat: 23.8223,
    lng: 90.3654,
  },
  {
    id: 3,
    name: 'Uttara Safe Haven',
    nameBn: 'উত্তরা নিরাপদ আশ্রয়',
    status: 'capacity',
    distance: '5.2 km',
    capacity: '550/550',
    lat: 23.8759,
    lng: 90.3795,
  },
  {
    id: 4,
    name: 'Gulshan Emergency Center',
    nameBn: 'গুলশান জরুরি কেন্দ্র',
    status: 'unsafe',
    distance: '4.1 km',
    capacity: '200/400',
    lat: 23.7808,
    lng: 90.4167,
  },
]

export const ShelterMap = () => {
  const { t, language } = useLanguage()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'bg-safe text-white'
      case 'capacity':
        return 'bg-yellow-500 text-white'
      case 'unsafe':
        return 'bg-danger text-white'
      default:
        return 'bg-muted'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'safe':
        return t('shelters.safe')
      case 'capacity':
        return t('shelters.capacity')
      case 'unsafe':
        return t('shelters.unsafe')
      default:
        return status
    }
  }

  return (
    <section id='shelters' className='py-20 water-gradient'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-primary-foreground'>
            {t('shelters.title')}
          </h2>
          <p className='text-xl text-cyan-glow'>{t('shelters.subtitle')}</p>
        </div>

        {/* 3D Map Visualization */}
        <div className='mb-12 rounded-2xl overflow-hidden border-2 border-cyan-glow/30 shadow-2xl'>
          <div className='relative h-[400px] bg-gradient-to-br from-ocean-deep to-ocean-blue'>
            <img
              src={shelterImg}
              alt='Shelter map'
              className='w-full h-full object-cover opacity-30'
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='text-center text-primary-foreground'>
                <MapPin className='h-16 w-16 mx-auto mb-4 text-cyan-glow animate-pulse' />
                <p className='text-xl font-semibold'>
                  Interactive 3D Shelter Map
                </p>
                <p className='text-sm mt-2 text-muted-foreground'>
                  Real-time shelter locations and capacity
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shelter Cards */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {shelters.map((shelter) => (
            <Card
              key={shelter.id}
              className='border-cyan-glow/30 bg-card/50 backdrop-blur hover:border-cyan-glow transition-all duration-300 hover:glow-cyan'
            >
              <CardHeader>
                <CardTitle className='flex items-start justify-between'>
                  <span className='text-lg'>
                    {language === 'en' ? shelter.name : shelter.nameBn}
                  </span>
                  <Badge className={getStatusColor(shelter.status)}>
                    {getStatusText(shelter.status)}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-3'>
                <div className='flex items-center gap-2 text-sm'>
                  <MapPin className='h-4 w-4 text-cyan-glow' />
                  <span>
                    {t('shelters.distance')}: {shelter.distance}
                  </span>
                </div>
                <div className='flex items-center gap-2 text-sm'>
                  <Users className='h-4 w-4 text-cyan-glow' />
                  <span>
                    {t('shelters.capacity_label')}: {shelter.capacity}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
