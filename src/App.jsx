import './App.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Announcments from './components/Announcments'
import AnnouncementDetail from './components/AnnouncmentDetail'
import WrongPath from './components/WrongPath.jsx'
import Footer from './components/Footer'
function App() {
  const location = useLocation();

  useEffect(() => {
    alert(`Bu site test amaçlı yayınlanmıştır. Ata Seçer Satranç Kulübü ile herhangi bir bağlantısı yoktur`);
    alert(`Ahmet Mahir Demirelli | a.mahir.demirelli@gmail.com`);
  }, [location]);
  return (
    <div className='App'>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/announcements' exact element={<Announcments />} />
          <Route path='/announcements/:key' element={<AnnouncementDetail />} />
          <Route path='*' element={<WrongPath/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
