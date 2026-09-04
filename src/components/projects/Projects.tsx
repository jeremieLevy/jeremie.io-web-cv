import ContainerTemplate from '../common/ui/ContainerTemplate';
import './Projects.css';
import ProjectCard from './partials/ProjectCard';
import Wireframe from '@/assets/graphic-elements/wireframe-cube.svg';
import Rectangle from '@/assets/graphic-elements/Rectangle 17.png';
import RecrutementSPA from '@/assets/images/projects/recrutement-SPA-ff.jpg';
import NextfeatLanding from '@/assets/images/projects/nextfeat-landing.jpg';
import { type Project } from './partials/ProjectCard';

const projects: Project[] = [
  {
    id: 1,
    title: 'Nextfeat',
    subtitle: 'Application Fullstack 360 - Api REST - SaaS',
    description:
      "Conception d'une plateforme web destinée à mettre en relation des musiciens amateurs afin qu'ils puissent réaliser des collaborations musicales (feats). Gestion de database pour les utilisateurs inscrits, sécurité applicative, démarche qualité, CI et CD, infrastructure de mise en production, création de plusieurs environnements (prod, staging)",
    image: NextfeatLanding,
    href: 'https://yournextfeat.com',
  },
  {
    id: 2,
    title: 'Recrutement Frenchfounders',
    subtitle: "Intégration d'une SPA",
    description:
      "Intégration ui avec le framework VueJS à partir de la maquette produit (Figma), consommation de l'API. Utilisation de GSAP pour certains effets de scroll.",
    image: RecrutementSPA,
    href: 'https://recrutement.frenchfounders.com',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <ContainerTemplate size="large">
        <div className="md:py-32 pt-32 pb-16">
          <div className="relative mb-20">
            <div className="flex items-center justify-center gap-8">
              <img src={Rectangle} className="max-w-4" />
              <div className="font-mono-alt font-bold md:text-6xl text-5xl">
                Projets
              </div>
              <img src={Rectangle} className="max-w-4" />
            </div>
            <img
              src={Wireframe}
              className="-z-10 absolute inset-0 -top-20 left-[50%] translate-x-[-50%] max-w-80"
            />
          </div>
          <div className="stacker-frame">
            <div className="stacker">
              {projects.map((project) => (
                <ProjectCard project={project} />
              ))}
              <div className="h-72"></div>
            </div>
          </div>
        </div>
      </ContainerTemplate>
    </section>
  );
}
