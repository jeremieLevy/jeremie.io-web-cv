import './App.css'
import Header from '@/components/header/Header'
import ScrollHeader from '@/components/header/ScrollHeader'
import Hero from '@/components/hero/Hero'
import VueSkill from './components/skill-section/VueSkill'
import { ThemeProvider } from '@/contexts/ThemeContext'
import OtherSkills from './components/other-skills-section/OtherSkills'

function App() {
  return (
    <ThemeProvider>
      <header>
        <Header />
        <ScrollHeader />
      </header>
      <main>
        <Hero />
        <VueSkill />
        <OtherSkills />
      </main>
    </ThemeProvider>
  )
}

export default App
