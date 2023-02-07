import React, { useState } from 'react';
import './header.css';
import { FaBars } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { MdNotifications, MdApps } from 'react-icons/md';
import { ImYoutube2 } from 'react-icons/im'


const Header = ({ handleSideBarToggle }) => {

  const profile = localStorage.getItem('profile');


  return (
    <div className='header border border-dark'>
      <FaBars 
        className='header_menu' size={26}
        onClick={() => handleSideBarToggle()} />
        

      <ImYoutube2 sixe={28} className='header_logo' />

      <form className='header_form'>
        <input className='header_input' type='text' placeholder='Search'  />
        <button className='header_btn' type='submit'><CiSearch size={22}/></button>
      </form>

      <div className="header_icons">
        <MdNotifications size={28} style={{marginRight: '10px'}} />
        <MdApps size={28} style={{marginRight: '10px'}} />
        <img src={profile} alt="profile-icon" className='profile-icon' />
      </div>

    </div>
  )
}

export default Header;