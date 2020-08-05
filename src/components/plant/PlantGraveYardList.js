import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PlantCard from './PlantCard';
import PlantJournalCard from "./PlantJournalCard"
import PlantManager from '../../modules/PlantManager';
import "./PlantCard.css"
import PlantList from "./PlantList"



const PlantGraveYardList = (props) => {

  const [plants, setPlants] = useState([]);
  //const [journals, setJournals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  const withDetails = () => {
    PlantManager.getWithDetails().then(plantsfromAPI => {
      setPlants(plantsfromAPI)
    });
  }





  useEffect(() => {
    //getPlants()

    withDetails()
    //expandedPlantandJournal()
    setIsLoading(false);

  }, []);





 
  // Mapping through 
  return (
    <>

        <div className="flip-card-front">
          <div className="flipCard-generator">
            {plants.map(plant =>
            //plant.isDead ? null:
            // !plant.isDead ? null:
              <PlantCard
                key={plant.id}
                plant={plant}
                //deletePlant={deletePlant}
              
               // updateForGarbagePlant={updateForGarbagePlant}
                //isChecked={isChecked}
                {...props} 
              />)}
        
          </div>
        </div>

    </>

  );
};
export default PlantGraveYardList;