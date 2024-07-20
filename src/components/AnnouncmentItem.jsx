import { useNavigate } from 'react-router-dom'; 
import '../styles/Announcment.css';

export default function AnnouncmentItem({ id, image, title, content }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/announcements/${id}`);
  }
  return (
    <div className='announcmentItem' onClick={handleClick}>
      {image && (
          <div className='announcmentImage' style={{ backgroundImage: `url(${image})` }}></div>
        )}
      <h1 style={{ marginBottom: '10px' }}>{title}</h1>
      {!image && (
          <p style={{ marginTop: '0px' }}>{content}</p>
        )}
    </div>
  );
}