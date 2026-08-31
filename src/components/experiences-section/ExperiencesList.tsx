import { useCallback, useEffect, useRef, useState } from "react"
import ContainerTemplate from "../common/ui/ContainerTemplate"
import './ExperiencesList.css'
import SmallRectangle from '@/assets/graphic-elements/Rectangle 18.png'

type Experience = {
  id: number
  year: string
  title: string
  description: string
  company: string
}

const experiences: Experience[] = [
  {
    id: 1,
    year: "2026",
    title: "Software Engineer",
    description: "Developed and maintained web applications using React and Node.js.",
    company: "Tech Solutions Inc."
  },
  {
    id: 2,
    year: "2025",
    title: "Frontend Developer",
    description: "Created responsive user interfaces with React and TypeScript.",
    company: "Creative Web Agency"
  },
  {
    id: 3,
    year: "2024",
    title: "Intern",
    description: "Assisted in the development of internal tools and gained experience in full-stack development.",
    company: "Startup Hub"
  }
]

export default function ExperiencesList() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState<number>(0)


  const handleScrollItem = useCallback((index: number) => {
    const container = scrollRef.current
    const item = itemRefs.current[index]
    if (!container || !item) return

    const containerRect = container.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()

    const targetScrollTop =
      container.scrollTop + (itemRect.top - containerRect.top) - 50

    container.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    })

    setActiveIndex(index)
  }, [])

  const handleScroll = useCallback(() => {
    const container = scrollRef.current
    if (!container) {
      return
    }

    const containerRect = container.getBoundingClientRect()
    const containerTop = containerRect.top

    let closestIndex = 0
    let closestDistance = Infinity

    itemRefs.current.forEach((item, index) => {
      if (!item) return
      const itemRect = item.getBoundingClientRect()
      const distance = Math.abs(itemRect.top - containerTop)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex)
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    handleScroll()
    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [handleScroll])


  return (
    <ContainerTemplate size="mid">
      <div className="py-20">
        <div className="experiences-container">
          <div ref={scrollRef} className="experience-list">
            {experiences.map((experience, index) => (
              <div key={experience.id} ref={(el) => { itemRefs.current[index] = el }} className="experience-item">
                <div className="font-mono italic text-5xl font-bold">{experience.year}</div>
                <img src={SmallRectangle} className="w-6 h-6 mx-auto my-8" />
                <p className="font-mono!">{experience.title}</p>
                <p className="font-mono!">{experience.description}</p>
                <p className="font-mono! font-bold!">{experience.company}</p>
              </div>
            ))}
          </div>
          <div className="experience-pagination">
            {experiences.map((experience, index) => (
              <div
                onClick={() => handleScrollItem(index)}
                key={experience.id}
                className={index === activeIndex ? 'bullet--accent' : 'bullet'}
              />
            ))}
          </div>
        </div>
      </div>
    </ContainerTemplate>
  )
}
