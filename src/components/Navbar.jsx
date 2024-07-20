import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={Logo} alt="" />
            <div className='mainLink'>
                <NavLink to={"https://ahmet-mahirdemirelli.github.io/Ata-Secer-Satranc-Kulubu-Web-Page/"}>Anasayfa</NavLink>
                <NavLink to={"/Ata-Secer-Satranc-Kulubu-Web-Page/announcements"}>Duyurular</NavLink>
                <NavLink to={"/Ata-Secer-Satranc-Kulubu-Web-Page/about"}>Hakkımızda</NavLink>
                <NavLink to={"/Ata-Secer-Satranc-Kulubu-Web-Page/contact"}>İletişim</NavLink>
            </div>
        </div>
    </div>
  )
}
