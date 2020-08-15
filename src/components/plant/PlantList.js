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
      plantsfromAPI.sort((x, y) => {
        let a = new Date(x.entryDate),
            b = new Date(y.entryDate);
        return b- a;
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

  // Mapping through 
  return (
    <>

{/* <div className="ButtonandSearchList">
  <fieldset>
<input
        type="text"
        placeholder="Search via NickName"
        onChange={evt => setSearch(evt.target.value)}
      />
     </fieldset> 
      </div> */}

<div className= "plantCards-Center__Container">
        {filteredPlants.map(plant =>
          plant.isDead ? null : //TOGGLE FOR PLANT STATUS TO SHOW ONLY FALSE
           //!plant.isDead ? null:  //ToGGLE FOR PLANT STATUS TO SHOW ONLY TRUE
            <PlantCard
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
export default PlantList;







