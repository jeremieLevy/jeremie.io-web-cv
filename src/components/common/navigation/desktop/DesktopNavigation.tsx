import type { NavItem } from '../NavigationData';
import './DesktopNavigation.css';

type DesktopNavigationProps = {
  navItems: NavItem[];
};

export default function DesktopNavigation({
  navItems,
}: DesktopNavigationProps) {
  return (
    <nav className="lg:flex hidden w-fit ml-auto font-mono-alt text-sm font-bold border-r pr-8 xl:pr-16 mr-8">
      <ul className="flex xl:gap-16 gap-8 items-center">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              className="transition-all duration-150 ease-in-out hover:text-light"
              href={item.link}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
