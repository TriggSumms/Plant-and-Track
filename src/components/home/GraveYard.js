import React, { useState, useEffect } from 'react';
import "./Home.css";
import UserList from '../auth/UserList';
import PlantGraveYardList from '../plant/PlantGraveYardList';





const GraveYard = props => {

  return (
    <>

      <header></header>
      <div id="main">
        <article>

          <PlantGraveYardList {...props} />
        </article>
        <nava>
          <UserList {...props} />
        </nava>
        <aside></aside>
      </div>
      <footer></footer>

    </>
  )
};


export default GraveYard;