import {Data} from '../helpers/Data.jsx'
import AnnouncmentItem from './AnnouncmentItem.jsx'
import '../styles/Announcment.css'
export default function Announcments() {
  return (
    <div className='announcment'>
      <h1 className='announcmentTitle'>Duyurular</h1>
      <div className='announcmentList'>
        {Data.map((announcmentItem) => {
          return(
            <AnnouncmentItem
              key={announcmentItem.id}
              id={announcmentItem.id} 
              image={announcmentItem.image}
              title={announcmentItem.title}
              content={announcmentItem.content}
            />
          )
        })}
      </div>
    </div>
  )
}
