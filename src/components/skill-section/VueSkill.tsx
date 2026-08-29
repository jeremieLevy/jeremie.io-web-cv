import './VueSkill.css'
import ContainerTemplate from '@/components/common/ui/ContainerTemplate'
import FocusElement from '@/assets/graphic-elements/focus-element.png'
import Vue3DLogo from '@/assets/images/vue_3D_logo.png'

export default function VueSkill() {
  return (
    <ContainerTemplate size="large">
      <div className="vue-skill">
        <div className="md:flex items-center w-full gap-20">
          <div className="relative lg:w-[56rem] flex items-center justify-center w-full h-fit mb-12 md:mb-0">
            <img src={FocusElement} className="h-fit object-contain" />
            <img src={Vue3DLogo} alt="vuejs-3D-logo" className="vue-logo" />
          </div>
          <div className="w-full">
            <h2 className="mb-8!">Solide connaissance du framework VueJS</h2>
            <p className="text-start">Au terme d'une expérience de deux ans comme développeur Frontend au sein de l'équipe tech de Frenchfounders à Marseille, j'ai participé à l'élaboration de plusieurs features sur la plateforme de l'entreprise, qui vont d'un moteur de recherche avec performances IA, tunnel d'onboarding, intégration complète d'une SPA en passant également par les phases de supports et de maintenance technique du projet durant différents cooldown.
              J'ai principalement travaillé avec le framework VueJS en Typescript ce qui m'a permis d'acquérir une connaissance assez large de cet outil au terme de ces deux ans, ainsi qu'avec la palette d'outils relative à tout l'écosystème Vue : Tanstack Vue query pour les requêtes, Pinia, i18n...
            </p>
          </div>
        </div>
      </div>
    </ContainerTemplate>
  )
}
