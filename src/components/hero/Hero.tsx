import './Hero.css'
import BigLightElement from '@/assets/graphic-elements/Rectangle 12.png'
import ProfilePic from '@/assets/images/profile-pic.png'
import Button from '@/components/common/button/Button'
import Chevrons from '@/assets/graphic-elements/chevrons.svg'
import SingleChevron from '@/assets/graphic-elements/single-chevron.svg'


export default function Hero() {
  return (
    <div className="relative pb-20 md:flex gap-8 md:px-8 px-4 items-center justify-center mb-24 mt-24">
      <div className="relative flex justify-center md:mb-0 mb-8">
        <img src={BigLightElement} alt="" className="relative z-20" />
        <img src={ProfilePic} alt="" className="profile-pic" />
      </div>
      <div className="text-start sm:px-16 md:px-0">
        <h2 className="hero-title font-mono! italic">Hello !</h2>
        <p className="font-mono-alt! mb-6!">Iam a fullstack NodeJS and Typescript developer</p>
        <Button cta="Get Started" />
      </div>
      <img src={Chevrons} alt="" className="chevrons" />
      <img src={SingleChevron} alt="" className="chevron" />
    </div>
  )
}
