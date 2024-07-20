import BannerImage from '../assets/aboutImage.jpg'
import '../styles/Home.css'
export default function Home() {
  return (
    <div className='home'>
      <div className='homeTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
    </div>
  )
}
