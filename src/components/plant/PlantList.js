import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
//import PlantJournalCard from "./PlantJournalCard"
import PlantManager from '../../modules/PlantManager';
import "./PlantCard.css"






const PlantList = (props) => {
  // The initial state is an empty array
  const [plants, setPlants] = useState([]);
  //const [journals, setJournals] = useState([]);




  const withDetails = () => {
    PlantManager.getWithDetails("plants").then(plantsfromAPI => {
      setPlants(plantsfromAPI)
    });
  }
/* 
  const getPlants = () => {
    return PlantManager.getAll("plants").then(plantsFromAPI => {
      setPlants(plantsFromAPI)
    });
  } */

  
  const updateForGarbagePlant = garbagePlant => {
   console.log("GarbageplantBEFORE", garbagePlant) 
   PlantManager.update(garbagePlant)
    //.then(() => getPlants());
    console.log("GarbageplantAFTER", garbagePlant)
};
  

 




  useEffect(() => {
    withDetails();
    //getPlants()
    //withJournalDetails();
  }, []);


const deletePlant = (id) => {
    PlantManager.delete(id)
      .then(() => PlantManager.getAll("plants").then(setPlants))
    //.then(getPlants);
  };




  // Mapping through 
  return (
    <>


      <button type="button" className="waves-effect waves-light btn"
        onClick={() => { props.history.push("/plants/new") }}>
        New Plant Baby ?
        </button>

  {plants.isDead ? true:

        <div className="flip-card-front">
          <div className="flipCard-generator">
            {plants.map(plant =>
              <PlantCard
                key={plant.id}
                plant={plant}
                deletePlant={deletePlant}
              // plant={plant.isDead ? true : false }
                updateForGarbagePlant = {updateForGarbagePlant}
                {...props}
              />)}
              
          </div>
        </div>
    }
    </>

  );
};
export default PlantList;

















    // const withJournalDetails = () => {
  //   PlantManager.getWithJournalDetails().then(plantsfromAPI => {
  //     setPlants(plantsfromAPI)
  //   });
  // } 

  /*  const deleteTheJournal = (id) => {
      PlantManager.deleteJournal(id)
        .then(() => PlantManager.getAll("journals").then(setJournals))
      //.then(getPlants);
    };  
   */

