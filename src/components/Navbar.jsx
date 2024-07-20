import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={Logo} alt="" />
            <div className='mainLink'>
                <NavLink to={"/Ata-Secer-Satranc-Kulubu/"}>Anasayfa</NavLink>
                <NavLink to={"/Ata-Secer-Satranc-Kulubu/announcements"}>Duyurular</NavLink>
                <NavLink to={"/Ata-Secer-Satranc-Kulubu/about"}>Hakkımızda</NavLink>
                <NavLink to={"/Ata-Secer-Satranc-Kulubu/contact"}>İletişim</NavLink>
            </div>
        </div>
    </div>
  )
}
