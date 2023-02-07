import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/auth.actions';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector(state => state.auth.accessToken); 

  useEffect(() => {
    if(accessToken) {
      navigate('/')
    }
  },[accessToken,navigate])

  const handleLogin = () => {
    dispatch(login());
  }
  return (
    <>
        <div className="login_div">
            <div className="login_container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="youtubr-logo" />
                <button onClick={() => handleLogin()}>Login with your google account</button>
                <p>youtube clone made by Shubham Pal</p>
            </div>
        </div>
    </>
  )
}

export default Login