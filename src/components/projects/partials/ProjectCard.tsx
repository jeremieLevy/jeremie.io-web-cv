import './ProjectCard.css';

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="project-card">
      <div className="md:w-[35%] flex-1 md:flex-none bg-light order-last md:order-first py-8 px-6 text-end text-dark">
        <div className="font-mono-alt text-2xl font-extrabold tracking-wider pb-2">
          {project.title}
        </div>
        <div className="font-mono-alt pb-2">{project.subtitle}</div>
        <p className="text-end! text-sm/5!">{project.description}</p>
      </div>
      <div className="md:flex min-h-48 bg-nuage overflow-hidden">
        <a href={project.href} target="_blank" className="w-full h-full">
          <img
            src={project.image}
            alt="made-project-img"
            className=" object-cover h-full object-left cursor-pointer scale-100 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80"
          />
        </a>
      </div>
    </div>
  );
}
