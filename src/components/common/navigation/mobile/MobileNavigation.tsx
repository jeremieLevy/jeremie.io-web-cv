import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './MobileNavigation.css';
import GraphicElement from '@/assets/graphic-elements/graphic-element.png';
import type { NavItem } from '../NavigationData';
import ColorTheme from '@/components/header/partials/ColorTheme';

type MobileNavigationProps = {
  navItems: NavItem[];
};

export default function MobileNavigation({ navItems }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="ml-auto lg:hidden relative w-[4rem] h-[4rem] z-30 flex flex-col items-center justify-center mt-2"
      >
        <span className="material-symbols-rounded dropdown-icon">
          arrow_drop_down
        </span>
      </div>
      {createPortal(
        <div className={`nav-overlay ${isOpen ? 'nav-overlay--open' : ''}`}>
          <div className="w-fit mx-auto px-8 pt-28 h-full">
            <div
              onClick={() => setIsOpen((prev) => (prev ? false : true))}
              style={{ backgroundImage: `url(${GraphicElement})` }}
              className="max-w-24 h-24 w-24 cursor-pointer hover:opacity-70 mx-auto bg-cover bg-no-repeat mb-12"
            />
            <div className="w-fit mx-auto mb-12">
              <ColorTheme />
            </div>
            <nav className="font-mono-alt text-center text-4xl">
              <ul className="space-y-12">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setIsOpen((prev) => (prev ? false : true))}
                  >
                    <a
                      href={item.link}
                      className="hover:text-nuage! text-dark! "
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
