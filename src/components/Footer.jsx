import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href="https://www.instagram.com/atasecersatranc/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
            </a>
        </div>
        <p>Tüm Hakları Saklıdır | Ata Seçer Satranç Kulübü</p>
    </div>
  )
}
