import React, { useState } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import "./style.css";
import Info from "./dataAPI"

const Profile = () => {
    const [infoData, setInfoData] = useState(Info);
    console.log(infoData);
  return (
    <div>
        <div className="card">
            <Header />
            <Main />
            <Footer />
        </div>    
    </div>
  )
}

export default Profile