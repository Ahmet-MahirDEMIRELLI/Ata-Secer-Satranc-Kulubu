import Logo from '../assets/logo-no-background.png'
import '../styles/WrongPath.css'
export default function WrongPath() {
  return (
    <div className='mainDiv'>
      <img src={Logo} alt="" />
      <p>Aradığınız sayfa bulunmamaktadır</p>
    </div>
  )
}
