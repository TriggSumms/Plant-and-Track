
import React, { useState, useEffect } from 'react';
import "./Home.css";
import UserList from '../auth/UserList';
import PlantList from "../plant/PlantList";



const Home = props => {


  return (
    <>

      <header></header>
      <div id="main">
        <article>
          <div>
            <PlantList
              {...props}
            />
          </div>
        </article>
        <nava>
          <UserList
            {...props} />
        </nava>
        <aside></aside>
      </div>
      <footer></footer>

    </>
  )
};

export default Home;