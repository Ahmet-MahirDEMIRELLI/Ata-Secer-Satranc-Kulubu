import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import {useRef, useEffect} from 'react'
export default function Navbar() {
  const sideBarRef = useRef(null);
  const handleClick = () => {
    sideBarRef.current.classList.toggle('openSideBar');
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        sideBarRef.current.classList.remove('openSideBar');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <header className='navbar'>
      <div className='links'>
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

      <div className="hamburger" onClick={handleClick}>
        <div className='image'>
          <img src={Logo} alt="" />
        </div>
        <div className='bars'>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>    
      </div>
      <div ref={sideBarRef} className='mobileNav'>
        <NavLink to={"/Ata-Secer-Satranc-Kulubu/"}>Anasayfa</NavLink>
        <NavLink to={"/Ata-Secer-Satranc-Kulubu/announcements"}>Duyurular</NavLink>
        <NavLink to={"/Ata-Secer-Satranc-Kulubu/about"}>Hakkımızda</NavLink>
        <NavLink to={"/Ata-Secer-Satranc-Kulubu/contact"}>İletişim</NavLink>
      </div>
    </header>
    
  )
}
