import './App.css'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import VueSkill from './components/skill-section/VueSkill'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <VueSkill />
      </main>
    </>
  )
}

export default App
