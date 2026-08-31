import DesktopNavigation from "./desktop/DesktopNavigation";
import MobileNavigation from "./mobile/MobileNavigation"
import { navItems } from './NavigationData'

export default function Nav() {

  return (
    <>
      <DesktopNavigation navItems={navItems} />
      <MobileNavigation navItems={navItems} />
    </>
  )
}
