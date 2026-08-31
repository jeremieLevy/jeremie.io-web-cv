import { useTheme } from "@/contexts/ThemeContext";
import clsx from "clsx";


export default function ColorTheme() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="lg:pl-12 z-50 flex items-center gap-4">
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

  )
}
