import clsx from 'clsx'
import './Header.css'
import { useTheme } from '@/hooks/useTheme'
import LightGraphicElement from '@/assets/graphic-elements/Rectangle 17.png'

type NavItem = {
  id: number
  label: string
  link: string
}

const navItems: NavItem[] = [
  {
    id: 1,
    label: 'Experience',
    link: '#'
  },
  {
    id: 2,
    label: 'Hobbies',
    link: '#'
  },
  {
    id: 3,
    label: 'Contact',
    link: '#'
  }
]

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative min-h-32 flex items-center w-full px-4 md:px-8 lg:px-12 xl:px-48">
      <h1 className="main-title font-mono text-2xl! xl:text-4xl!">jeremie.io</h1>
      <nav className="w-fit ml-auto font-mono-alt text-sm font-bold border-r pr-8 xl:pr-16">
        <ul className="flex xl:gap-16 gap-8 items-center">
          {navItems.map((item) =>
            <li key={item.id}>
              <a className="transition-all duration-150 ease-in-out" href={item.link}>{item.label}</a>
            </li>
          )}
        </ul>
      </nav>
      <div className="flex items-center gap-6 px-6">
        <span
          className={clsx('material-symbols-rounded hover:text-light cursor-pointer p-2', { 'theme-selected': theme === 'light' })}
          onClick={() => setTheme('light')}
        >
          light_mode
        </span>
        <span
          className={clsx('material-symbols-rounded hover:text-light cursor-pointer p-2', { 'theme-selected hover:text-nuage!': theme === 'dark' })}
          onClick={() => setTheme('dark')}
        >
          dark_mode
        </span>
      </div>
      <img src={LightGraphicElement} alt="" className="max-w-36 absolute -right-4 -top-3" />
    </div>
  )
}
