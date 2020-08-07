import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
//import PlantJournalCard from "./PlantJournalCard"
import PlantManager from '../../modules/PlantManager';
import "./PlantCard.css"






const PlantList = (props) => {
  // The initial state is an empty array
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([])


  const withDetails = () => {
    PlantManager.getWithDetails("plants").then(plantsfromAPI => {
      setPlants(plantsfromAPI)
    });
  }

  const deletePlant = (id) => {
    PlantManager.delete(id)
      .then(() => PlantManager.getAll("plants").then(setPlants))

  };



  useEffect(() => {
    withDetails();
  }, []);




  useEffect(() => {
    setFilteredPlants(
      plants.filter(plant =>
        plant.nickName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, plants]);

  // Mapping through 
  return (
    <>


      <button type="button" className="waves-effect waves-light btn"
        onClick={() => { props.history.push("/plants/new") }}>
        New Plant Baby ?
        </button>

      
        
        <input
          type="text"
          placeholder= "Search via NickName"
          onChange={evt => setSearch(evt.target.value)}
        />
      

      <div id="content">
  <input type="text" name="input" className="input" id="search-input" onChange={evt => setSearch(evt.target.value)} />
  <button type="reset" class="search" id="search-btn"></button>
</div>

      <div className="flip-card-front">
        <div className="flipCard-generator">
          {filteredPlants.map(plant =>
            plant.isDead ? null : //TOGGLE FOR PLANT STATUS TO SHOW ONLY FALSE
              //!plant.isDead ? null:  //ToGGLE FOR PLANT STATUS TO SHOW ONLY TRUE
              <PlantCard
                key={plant.id}
                plant={plant}
                deletePlant={deletePlant}
                //updateForGarbagePlant={updateForGarbagePlant}
                //isChecked={isChecked}
                {...props}
              />)}

        </div>
      </div>

    </>

  );
};
export default PlantList;







