import React from 'react';
import './Info.css';
import InfoColoumn from './InfoColoumn';

function Info() {
  return (
    <div className='info_utama'>
      <div className='info_gambar'>
        <div className='info_gambar_besar'>
          <img src='https://cf.shopee.co.id/file/id-50009109-b36821c7dc97d7b59b885d4584b56cd4_xxhdpi' alt='gambar besar'></img>
        </div>
        <div className='info_gambar_kecil'>
          <img src='https://cf.shopee.co.id/file/id-50009109-e8667758a8c49a67f7f2b6538fea6e51_xhdpi' alt='gambar kecil 1'></img>
          <img src='https://cf.shopee.co.id/file/id-50009109-c50d62a8938ccec069936236dbff0ff2_xhdpi' alt='gambar kecil 2'></img>
        </div>
      </div>
      <div className='info_navi'>
        <InfoColoumn/>
      </div>
    </div>
  )
}

export default Info