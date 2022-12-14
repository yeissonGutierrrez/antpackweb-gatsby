import Logo from '../../../assets/icons/Logo.svg'
import Menu from '../../../assets/icons/menuIcon.svg'
import Menu2 from '../../../assets/icons/MenuBlack.svg'
import Card1 from '../../../assets/icons/cardIcon1.svg'
import Card2 from '../../../assets/icons/cardIcon2.svg'
import Card3 from '../../../assets/icons/cardIcon3.svg'
import Card4 from '../../../assets/icons/cardIcon4.svg'
import Mubico from '../../../assets/icons/mubico.svg'
import Mubico2 from '../../../assets/icons/mibicoLogoWhite.svg'
import WarnerMedia from '../../../assets/icons/WM.svg'
import Siigo from '../../../assets/icons/siigoLogo.svg'
import Verdi from '../../../assets/icons/LogoVERDI.svg'

interface iconProps {
  type: string
}

const Icon = ({ type }: iconProps) => {
  return (
    <>
      {type === 'logo' && <Logo />}
      {type === 'menu' && <Menu />}
      {type === 'menu2' && <Menu2 />}
      {type === 'card1' && <Card1 />}
      {type === 'card2' && <Card2 />}
      {type === 'card3' && <Card3 />}
      {type === 'card4' && <Card4 />}
      {type === 'mubico' && <Mubico />}
      {type === 'mubicoWhite' && <Mubico2 />}
      {type === 'hbo' && <WarnerMedia />}
      {type === 'siigo' && <Siigo />}
      {type === 'verdi' && <Verdi />}
    </>
  )
}

export default Icon