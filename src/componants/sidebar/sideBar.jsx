import React, { useState } from 'react';
import './sideBar.css';
import { MdHome, MdSubscriptions, MdHistory, MdThumbUp, MdExitToApp, MdLibraryBooks, MdSentimentDissatisfied } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { log_out } from '../../redux/actions/auth.actions';

const SideBar = ({sideBar, handleSideBarToggle}) => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    console.log('in logout handler')
    dispatch(log_out())
  }
  return (
    <nav className={sideBar ? "sidebar show_icon" : "sidebar"}>
      <li>
        <MdHome size={26}
          onClick={() => handleSideBarToggle()} />
        <span> Home</span>
      </li> 
      <li>
        <MdSubscriptions size={26}
          onClick={() => handleSideBarToggle()} />
        <span> Subscriptions</span>
      </li> 
      <li>
        <MdThumbUp size={26}
          onClick={() => handleSideBarToggle()} />
        <span> Liked Videos</span>
      </li>
      
      <li>
        <MdHistory size={26}
          onClick={() => handleSideBarToggle()} />
        <span> History</span>
      </li>
      
      <li>
        <MdLibraryBooks size={26}
          onClick={() => handleSideBarToggle()} />
        <span> Library</span>
      </li>
      
      <li>
        <MdSentimentDissatisfied size={26}
          onClick={() => handleSideBarToggle()} />
        <span> I don't know</span>
      </li>

      <hr />
      <li onClick={() => logoutHandler()}>
        <MdExitToApp size={26}
          onClick={() => handleSideBarToggle()} />
        <span> Log Out</span>
      </li>
      <hr />
    </nav>
  )
}

export default SideBar;