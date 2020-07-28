import React, { useState } from 'react';
import './PlantBaby.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './nav/NavBar';
import PlantCard from "./plant/PlantCard"
import ApplicationViews from "./ApplicationViews"
//import Jumbotron from "./nav/Jumbotron";



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
      <div className="App">
        <header>
          <NavBar hasUser={hasUser} clearUser={clearUser} />
        </header>
        <ApplicationViews hasUser={hasUser} setUser={setUser} />

        {/* Card Container lies below... */}
        <Container>
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-4 mb-4 grid-margin">
                <div className="card h-100">
                  <PlantCard />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
export default PlantBaby;