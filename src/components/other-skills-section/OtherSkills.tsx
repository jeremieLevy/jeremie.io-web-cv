import ContainerTemplate from "../common/ui/ContainerTemplate";
import './OtherSkills.css'
import MarquisBackground from '@/assets/graphic-elements/marquis-background.png'
import LightRectangle from '@/assets/graphic-elements/Rectangle 12.png'
import ReactLogo from '@/assets/images/logos/logo-react.svg'
import TanstackLogo from '@/assets/images/logos/logo-color-600.png'
import PiniaLogo from '@/assets/images/logos/logo.svg'
import DockerLogo from '@/assets/images/logos/docker.svg'
import NestJsLogo from '@/assets/images/logos/NestJS.svg'
import MarqueeCarousel from "../common/ui/carousels/MarqueeCarousel";

const marqueeImages: string[] = [
    ReactLogo, TanstackLogo, PiniaLogo, DockerLogo,
    NestJsLogo
]

export default function OtherSkills() {
    return (
        <ContainerTemplate size="large">
            <div className="py-12">
                <div className="other-skills">
                    <div className="order-2 md:order-1 w-full">
                        <h3>Et d'autres...</h3>
                        <p>J'ai également un scope de compétences plus élargi du fait de l'utilisation de technologies Backend (environnement serveur NodeJS en Typescript) avec une bonne pratique du framework NestJS (avec ORM Prisma et base de donnée PostgreSQL), et ce scope s’étend aussi dans toutes les applications liées à l’intégration et le déploiement continu dans la démarche Devops et la démarche qualité (stack Docker, CI/CD : workflows Github Actions, tests: Vitest, Jest, Playwright, gestion de projet: Notion, Trello.. )
                            Enfin, je possède également des connaissances et ai eu l’occasion de pratiquer en entreprise les outils intégrant de l’IA dans les process et workflows de travail afin d’améliorer la productivité (LLMs, Claude code, cowork, connecteurs..)
                        </p>
                    </div>
                    <div className="order-1 relative w-full flex items-center justify-center">
                        <img src={LightRectangle} className="light-rectangle" />
                        <div className="marquee">
                            <MarqueeCarousel images={marqueeImages} />
                        </div>
                        <img src={MarquisBackground} className="absolute z-10 max-w-72 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] right-0" />
                    </div>
                    <div className="w-full md:order-3 hidden xl:block"></div>
                </div>
            </div>
        </ContainerTemplate>
    )
}
