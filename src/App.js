import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./componants/header/header";
import SideBar from "./componants/sidebar/sideBar";
import HomeScreen from "./screen/homescreen/homescreen";
import Login from "./screen/login/login";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './app.css';
import { useSelector } from "react-redux";

const Layout = ({children}) => {
  const [sideBar, toggleSideBar] = useState(false);

  const handleSideBarToggle = () => toggleSideBar(!sideBar);
  return (
    <>
      <Header handleSideBarToggle={handleSideBarToggle} />
      <div className="app_container">
        <SideBar sideBar={sideBar} handleSideBarToggle={handleSideBarToggle} />
        <Container >
          {children}
        </Container>
      </div>
    </>
  )
}

function App() {
  const navigate = useNavigate();
  const { accessToken, loading} = useSelector(state => state.auth);

  useEffect(() => {
    if(!accessToken && !loading) {
      navigate('/login')
    }
  }, [accessToken, loading])

  return (
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomeScreen />
          </Layout>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={
          <Layout>
            <p>Searched content</p>
          </Layout>
        } />
      </Routes>
  );
}

export default App;
