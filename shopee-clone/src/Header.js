import React from 'react';
import './Header.css';
import logo from './blonjo.svg';
import { SearchSharp, ShoppingCartOutlined } from '@mui/icons-material';

function Header () {
  return (
    <div className='header'>
      <div className='header_info'>

        <div className='header_info_kiri'>
          <p>Go to Seller Center</p>
          <span className='dist'> | </span>
          <p>Download</p>
          <span className='dist'> | </span>
          <p>Follow us on</p>
          <div className='header_info_icon'>
            <div className='dumcon'></div>
            <div className='dumcon'></div>
            <div className='dumcon'></div>
          </div>
        </div>

        <div className='header_info_kanan'>

          <div className='header_info_notif'>
            <div className='header_info_icon'>
              <div className='dumcon'></div>
            </div>
            <p>Notifications</p>
          </div>

          <div className='header_info_help'>
            <div className='header_info_icon'>
              <div className='dumcon'></div>
            </div>
            <p>Help</p>
          </div>

          <div className='header_info_bahasa'>
            <div className='header_info_icon'>
              <div className='dumcon'></div>
            </div>
            <p>English</p>
            <div className='header_info_icon'>
              <div className='dumcon'></div>
            </div>
          </div>
          <div className='header_info_user'>
            <div className='dumcon'></div>
            <p>RTSD_Store</p>
          </div>

        </div>
      </div>

      <div className='header_main'>
        
        <div className='header_logo'>
          <img src={logo} alt='blonjo'/>
        </div>

          <div className='header_search'>
            <div className='header_search_bar'>
              <input
              placeholder='BESOK: Semua Produk Saya yang Bayar!'
              type='text'/>
              <SearchSharp className='header_search_icon'/>
            </div>
            
            <div className='header_troli'>
              <ShoppingCartOutlined className='header_troli_icon'/>
            </div>
          </div>
      
      </div>
    </div>
  )
}
 
export default Header