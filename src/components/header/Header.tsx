import './Header.css';
import Nav from '../common/navigation/Nav';
import ColorTheme from './partials/ColorTheme';
import LightGraphicElement from '@/assets/graphic-elements/Rectangle 17.png';

export default function Header() {
  return (
    <div className="header overflow-hidden pt-[2rem] lg:pt-0">
      <div className="relative lg:min-h-32 min-h-24 flex items-center w-full px-4 md:px-8 lg:px-12 xl:pl-48 lg:overflow-hidden pb-[8rem]">
        <div className="flex items-center flex-1">
          <h1 className="main-title font-mono text-xl! xl:text-3xl! cursor-pointer">
            jeremie-dev
          </h1>
          <Nav />
        </div>
        <div className="flex items-center relative">
          <div className="hidden lg:flex">
            <ColorTheme />
          </div>
          <img
            src={LightGraphicElement}
            alt=""
            className="max-w-36 md:translate-x-12 lg:translate-x-16 translate-x-8 -translate-y-4 lg:relative absolute top-0 right-0"
          />
        </div>
      </div>
    </div>
  );
}
