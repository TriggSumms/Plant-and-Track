import React, { useState, useEffect } from 'react';
import GraveYardCard from './GraveYardCard'
import PlantManager from '../../modules/PlantManager';
import "./PlantCard.css"
import "./SearchBar.css"



const PlantGraveYardList = (props) => {
    const [plants, setPlants] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredPlants, setFilteredPlants] = useState([])
  
  
    const withDetails = () => {
      PlantManager.getWithDetails("plants").then(plantsfromAPI => {
        plantsfromAPI.sort((x, y) => {
          let a = new Date(x.entryDate),
            b = new Date(y.entryDate);
          return b - a;
        });
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
  


  return (
    <>


             <div class="container">
            <div class="search">
              <div>
                <input type="text"  required placeholder="Search . . ." onChange={evt => setSearch(evt.target.value)}/>
              </div>
            </div>
          </div> 

      <div className="plantCards-Center__Container">
      {filteredPlants.map(plant =>
          //plant.isDead ? null: //TOGGLE FOR PLANT STATUS TO SHOW ONLY FALSE
          !plant.isDead ? null :  //ToGGLE FOR PLANT STATUS TO SHOW ONLY TRUE
            <GraveYardCard
            key={plant.id}
            plant={plant}
            deletePlant={deletePlant}
            search={search}
            plants={plants}
            setFilteredPlants={setFilteredPlants}
            //updateForGarbagePlant={updateForGarbagePlant}
            //isChecked={isChecked}
            {...props}
            />)}
      </div>

    </>
  );
};
export default PlantGraveYardList;