'use client'
import Community from '@/components/Community'
import CorespaceWeigher from '@/components/CorespaceWeigher'
import Coretime from '@/components/Coretime'
import CoretimeHub from '@/components/CoretimeHub'
import CoretimeMarket from '@/components/CoretimeMarket'
import CrossChainRegions from '@/components/CrossChainRegions'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import KeyComponents from '@/components/KeyComponents'
import Navbar from '@/components/Navbar'
import Team from '@/components/Team'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className='bg-[#000811]'>

      <div className='
    bg-[url(/background.png)] bg-no-repeat bg-cover min-h-screen
    '>
        <Navbar />
        <Hero />
      </div>

      <Coretime />
      <KeyComponents />
      <CrossChainRegions />
      <CoretimeMarket />
      <CoretimeHub />
      <CorespaceWeigher />
      <Team />
      <Community />
      <Footer />
    </main>
  )
}
