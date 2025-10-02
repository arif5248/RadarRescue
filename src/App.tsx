import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import Research from '@/research/Index'
import KidsGame from '@/KidsGame/pages/Index.tsx'
import Level1 from '@/KidsGame/pages/Level1.tsx'
import Level2 from '@/KidsGame/pages/Level2'
import NgoAndGov from '@/NgoAndGov/pages/Index'
import { DashboardHeader } from './components/DashboardHeader'
import { Footer } from './components/Footer'
// import { WaterDropEarthBackground } from '@/components/WaterDropEarthBackground' // 👈 add this

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* 👇 renders both canvases (water + 3D earth/satellites) behind your app */}
          {/* <WaterDropEarthBackground /> */}

          <DashboardHeader />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/research' element={<Research />} />
            <Route path='/kidsGame' element={<KidsGame />} />
            <Route path='/level/1' element={<Level1 />} />
            <Route path='/level/2' element={<Level2 />} />
            <Route path='/ngoAndGov' element={<NgoAndGov />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
)

export default App

// import { Toaster } from '@/components/ui/toaster'
// import { Toaster as Sonner } from '@/components/ui/sonner'
// import { TooltipProvider } from '@/components/ui/tooltip'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { LanguageProvider } from '@/contexts/LanguageContext'
// import Index from './pages/Index'
// import NotFound from './pages/NotFound'
// import Research from '@/research/Index'
// import { DashboardHeader } from './components/DashboardHeader'
// // import { Footer } from './components/Footer'
// import { WaterDropEarthBackground } from '@/components/WaterDropEarthBackground' // 👈 add this

// const queryClient = new QueryClient()

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <LanguageProvider>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           {/* 👇 renders both canvases (water + 3D earth/satellites) behind your app */}
//           <WaterDropEarthBackground />

//           <DashboardHeader />
//           <Routes>
//             <Route path='/' element={<Index />} />
//             <Route path='/research' element={<Research />} />
//             {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//             <Route path='*' element={<NotFound />} />
//           </Routes>
//           {/* <Footer /> */}
//         </BrowserRouter>
//       </TooltipProvider>
//     </LanguageProvider>
//   </QueryClientProvider>
// )

// export default App
