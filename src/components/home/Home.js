
import React, { useState, useEffect } from 'react';

//import PlantList from "../plant/PlantList"
import "./Home.css";
import "./SearchBar.css"
import UserList from '../auth/UserList';
import PlantList from "../plant/PlantList";
//import PlantCard from "../plant/PlantCard"
//import PlantManager from '../../modules/PlantManager';


const Home = props => {

  const [search, setSearch] = useState();
  const [filteredPlants, setFilteredPlants] = useState([])
  const [plants, setPlants] = useState([]);





  return (
    <>

      <header></header>
      <div id="main">
        <article>


        {/*   <fieldset>
            <input
              type="text"
              placeholder="Search via NickName"
              onChange={evt => setSearch(evt.target.value)}
            />
          </fieldset> */}
<div class="flexbox">
  <div class="search">

    <div>
      <input type="text" placeholder="Search . . ." required />
    </div>
  </div>
</div>

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