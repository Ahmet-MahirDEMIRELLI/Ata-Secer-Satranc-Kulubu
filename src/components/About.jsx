import BannerImage from '../assets/aboutImage.jpg'
import '../styles/About.css'
export default function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat non officia minus maiores consequatur expedita? In, temporibus? Sed quae reprehenderit odit dolore vel modi a quia, esse eaque impedit obcaecati!
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas iusto quia maiores. Esse ipsam eligendi assumenda quo deserunt veniam ab iste enim eos! Saepe eligendi voluptates non quidem maiores quibusdam?
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eius exercitationem quam ex impedit! Enim, corporis! Fuga assumenda eaque veritatis, itaque laborum quae incidunt reiciendis similique adipisci voluptatum rerum! Itaque.
        </p>
      </div>
    </div>
  )
}
