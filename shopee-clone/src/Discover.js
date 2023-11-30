import React from 'react';
import DiscoveryCard from './DiscoveryCard';
import './Discover.css';

function Discover() {
  return (
    <div className='discovery'>
      <div className='discovery_header'>
        <p7>PENEMUAN HARIAN</p7>
      </div>
      <hr/>
      <DiscoveryCard/>
      <p2>Lebih Banyak Euy</p2>
    </div>
  )
}

export default Discover