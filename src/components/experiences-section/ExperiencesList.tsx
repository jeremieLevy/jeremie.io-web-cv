import ContainerTemplate from "../common/ui/ContainerTemplate"
import './ExperiencesList.css'

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
  return (
    <ContainerTemplate size="mid">
      <div className="py-20">
        <div className="experiences-container">
          <div className="experience-list">
            {experiences.map((experience) => (
              <div key={experience.id} className="experience-item">
                <div className="font-mono italic text-5xl mb-4">{experience.year}</div>
                <p className="font-mono!">{experience.title}</p>
                <p className="font-mono!">{experience.company}</p>
                <p className="font-mono!">{experience.description}</p>
              </div>
            ))}
          </div>
          <div className="experience-pagination">
                {experiences.map((experience) => (
                  <div key={experience.id} className="bullet"/>
                ))}
          </div>      
        </div>
      </div>
    </ContainerTemplate>
  )
}
