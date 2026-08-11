import './App.css'
import Header from '@/components/header/Header'
import ScrollHeader from '@/components/header/ScrollHeader'
import Hero from '@/components/hero/Hero'
import VueSkill from './components/skill-section/VueSkill'
import { ThemeProvider } from '@/contexts/ThemeContext'

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
      </main>
    </ThemeProvider>
  )
}

export default App
