import React from "react";
import ReactDOM from "react-dom";
import FullName from "./components/Profile/FullName.js";
import Address from "./components/Profile/Address.js";
import ProfilePhoto from "./components/Profile/ProfilePhoto.js";
import "./App.css";

const App =() =>(
  <div className='profil'  >
  <ProfilePhoto/> 
  <FullName/>
  <Address/>
  </div>
);

export default App;
