import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../helpers/Data';
import '../styles/AnnouncmentDetail.css';

const AnnouncementDetail = () => {
  const { key } = useParams();
  const [imageStyle, setImageStyle] = useState({});
  const announcement = Data.find(item => item.id === key);

  useEffect(() => {
    if (announcement && announcement.image) {
      const img = new Image();
      img.src = announcement.image;

      img.onload = () => {
        let width = 700;
        let height = 500;

        if (img.height > img.width) {
          width = 450;
          height = 700;
        }

        setImageStyle({
          width: `${width}px`,
          height: `${height}px`,
          backgroundImage: `url(${announcement.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        });
      };
    }
  }, [announcement]);

  if (!announcement) {
    return <div>Duyuru bulunamadı!</div>;
  }

  return (
    <div className='mainDiv' style={{height:"auto"}}>
      <h1>{announcement.title}</h1>
      <div className='info'>
        {announcement.image && (
          <div className='announcmentImage' style={imageStyle}></div>
        )}
        <p className="announcementContent">{announcement.content}</p>
      </div>
    </div>
  );
};

export default AnnouncementDetail;
