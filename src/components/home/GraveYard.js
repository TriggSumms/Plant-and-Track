import React, { useState, useEffect } from 'react';
import "./Home.css";
//import "./SearchBar.css"
import UserList from '../auth/UserList';
import PlantGraveYardList from '../plant/PlantGraveYardList';
//import PlantCard from "../plant/PlantCard"
//import PlantManager from '../../modules/PlantManager';




const GraveYard = props => {
  /* 
    const [search, setSearch] = useState();
    const [filteredPlants, setFilteredPlants] = useState([])
    const [plants, setPlants] = useState([]);
   */




  return (
    <>

      <header></header>
      <div id="main">
        <article>
          {/* 
          <fieldset>
            <input
              type="text"
              placeholder="Search via NickName"
              onChange={evt => setSearch(evt.target.value)}
            />
          </fieldset> */}




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