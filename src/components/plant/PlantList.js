import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
//import PlantJournalCard from "./PlantJournalCard"
import PlantManager from '../../modules/PlantManager';
import "./PlantCard.css"






const PlantList = (props) => {
  // The initial state is an empty array
  const [plants, setPlants] = useState([]);




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



  // Mapping through 
  return (
    <>


      <button type="button" className="waves-effect waves-light btn"
        onClick={() => { props.history.push("/plants/new") }}>
        New Plant Baby ?
        </button>

  
        
        <div className="flip-card-front">
          <div className="flipCard-generator">
            {plants.map(plant =>
            //plant.isDead ? null:
            // !plant.isDead ? null:
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







