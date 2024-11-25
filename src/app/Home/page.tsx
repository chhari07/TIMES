import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { TabsDemo } from '@/components/TabsDemo'
import React from 'react'

const page = () => {
  return (
    <div>
      <main className="min-h-screen after: bg-black  antialiased bg-grid-white/[0.2]">
      
        <HeroSection />

       <TabsDemo/>
     
        <Footer />
      </main>
    </div>
  )
}

export default page
