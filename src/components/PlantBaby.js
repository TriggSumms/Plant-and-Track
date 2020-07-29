import React, { useState } from 'react';
import './PlantBaby.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container } from 'react-bootstrap';
import NavBar from './nav/NavBar';
//import PlantCard from "./plant/PlantCard"
import ApplicationViews from "./ApplicationViews"
//import Jumbotron from "./nav/Jumbotron";
//import Home from "./home/Home"


const PlantBaby = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;



  //hasUser makes sure the crendentials has a value
  const [hasUser, setHasUser] = useState(isAuthenticated());

  //Used to refresh in after login in Login.js
  const setUser = user => {
    setHasUser(isAuthenticated());
  };

  //Logout function located in Navbar
  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }
  return (
    <>


      <NavBar hasUser={hasUser} clearUser={clearUser} />

      <ApplicationViews hasUser={hasUser} setUser={setUser} />
      <body>
        <header></header>
        <div id="main">
          <article></article>
          <nav></nav>
          <aside></aside>
        </div>
        <footer></footer>
      </body>



    </>
  );
}
export default PlantBaby;


