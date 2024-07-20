import '../styles/Contact.css'
import BannerImage from '../assets/ataSecer.jpg'
export default function Contact() {
  return (
    <div className="contactContainer">
      <h1>FM Ata SEÇER</h1>
      <i>
        <p>Telefon numarası: 0555 555 5555</p>
      </i>  
      <div className="bannerImage">
        <img src={BannerImage} alt="ATA Seçer" />
      </div>
    </div>
    // <div className='contact'>
    //   <div className='contactLeft' style={{backgroundImage:`url(${BannerImage})`}}></div>
    //   <div className='contactRight'>
    //     <h1>Bizimle İletişime Geçin</h1>
    //     <form>
    //       <label>Ad Soyad</label>
    //       <input 
    //         type="text" 
    //         name="name" 
    //         placeholder='' 
    //       />
    //       <label>Telefon Numaranız</label>
    //         <input 
    //         type="tel" 
    //         name="phone" 
    //         placeholder="+90 5XXXXXXXXX" 
    //         pattern="\+90 5[0-9]{9}" 
    //         required 
    //         />
    //       <label>Mesajınız</label>
    //       <textarea
    //         rows={6}
    //         name="message" 
    //         placeholder='' 
    //       ></textarea>
    //     </form>
    //   </div>
    // </div>
  )
}
