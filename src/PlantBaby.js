import React, { useState } from 'react';
import NavBar from './components/nav/NavBar';
import ApplicationViews from "./components/ApplicationViews"




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

    </>
  );
}


export default PlantBaby;


