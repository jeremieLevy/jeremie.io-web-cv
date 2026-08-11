import { useEffect, useState } from 'react'
import './ScrollHeader.css'
import Nav from '../common/navigation/Nav'

export default function ScrollHeader() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2
      setIsVisible(window.scrollY > threshold)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`scroll-header ${isVisible ? 'scroll-header--visible' : ''}`}>
      <h1 className="scroll-header-title font-mono ">jeremie.io</h1>
      <Nav />
    </div>
  )
}
