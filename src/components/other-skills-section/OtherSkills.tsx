import ContainerTemplate from "../common/ui/ContainerTemplate";
import './OtherSkills.css'
import MarquisBackground from '@/assets/graphic-elements/marquis-background.png'

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
                    <div className="order-1 relative z-30 border w-full min-h-[21rem]">
                        <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${MarquisBackground})` }}></div>
                    </div>
                </div>
            </div>
        </ContainerTemplate>
    )
}
