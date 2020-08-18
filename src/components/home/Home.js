
import React, { useState, useEffect } from 'react';
import "./Home.css";
//import "./SearchBar.css"
import UserList from '../auth/UserList';
import PlantList from "../plant/PlantList";
//import PlantCard from "../plant/PlantCard"
//import PlantManager from '../../modules/PlantManager';


const Home = props => {
/* 
  const [search, setSearch] = useState();
  const [filteredPlants, setFilteredPlants] = useState([])
  const [plants, setPlants] = useState([]);



  useEffect(() => {
    setFilteredPlants(
      plants.filter(plant =>
        plant.nickName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, plants]);

 */

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