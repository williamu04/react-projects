import React, {useState, useEffect} from 'react';
import DiscoveryCard from './DiscoveryCard';
import './Discover.css';

function Discover() {
  const [scrollPosition, setScrollPosition] = useState(0); 
  useEffect(() => { window.addEventListener('scroll', () => { setScrollPosition(window.pageYOffset <= 120 ? window.pageYOffset : 120); }, { passive: true }); 
  return () => { window.removeEventListener('scroll', () => { setScrollPosition(window.pageYOffset <= 120 ? window.pageYOffset : 120); }); }; }, []);

  return (
    <div className='discovery'>
      <div className='discovery_header' style={{top:scrollPosition}}>
        <p7>PENEMUAN HARIAN</p7>
      </div>
      <DiscoveryCard/>
      <p2>Lebih Banyak Euy</p2>
    </div>
  )
}

export default Discover