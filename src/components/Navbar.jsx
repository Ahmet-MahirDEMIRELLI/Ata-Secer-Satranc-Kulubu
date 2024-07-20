import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={Logo} alt="" />
            <div className='mainLink'>
                <NavLink to={"/"}>Anasayfa</NavLink>
                <NavLink to={"/announcements"}>Duyurular</NavLink>
                <NavLink to={"/about"}>Hakkımızda</NavLink>
                <NavLink to={"/contact"}>İletişim</NavLink>
            </div>
        </div>
    </div>
  )
}
