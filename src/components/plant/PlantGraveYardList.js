import React, { useState, useEffect } from 'react';

//import PlantCard from './PlantCard';
import GraveYardCard from './GraveYardCard'
import PlantManager from '../../modules/PlantManager';
import "./PlantCard.css"



const PlantGraveYardList = (props) => {

  const [plants, setPlants] = useState([]);
  //const [journals, setJournals] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);



  const withDetails = () => {
    PlantManager.getWithDetails("plants").then(plantsfromAPI => {
      setPlants(plantsfromAPI)
    });
  }





  useEffect(() => {
    //getPlants()

    withDetails()
    //expandedPlantandJournal()
    //setIsLoading(false);

  }, []);

 



 
  // Mapping through 
  return (
    <>

        <div className="flip-card-front">
          <div className="flipCard-generator">
            {plants.map(plant =>
          //plant.isDead ? null: //TOGGLE FOR PLANT STATUS TO SHOW ONLY FALSE
         !plant.isDead ? null:  //ToGGLE FOR PLANT STATUS TO SHOW ONLY TRUE
              <GraveYardCard
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