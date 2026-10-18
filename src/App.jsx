import { MotionConfig } from 'motion/react'
import { SmoothScroll } from './hooks/useLenis'
import { useSceneTone } from './hooks/useSceneTone'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import TitleCard from './components/TitleCard'
import HowItWorks from './components/HowItWorks'
import WhoDoesWhat from './components/WhoDoesWhat'
import Families from './components/Families'
import Vision from './components/Vision'
import Finale from './components/Finale'
import Footer from './components/Footer'

export default function App() {
  useSceneTone()

  return (
    // reducedMotion="user": if the visitor's device asks for less motion, movement is switched off
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <Hero />
          <Problem />
          <TitleCard />
          <HowItWorks />
          <WhoDoesWhat />
          <Families />
          <Vision />
          <Finale />
        </main>
        <Footer />
      </SmoothScroll>
    </MotionConfig>
  )
}
