import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
//import PlantJournalCard from "./PlantJournalCard"
import PlantManager from '../../modules/PlantManager';
import "./PlantCard.css"


const PlantList = (props) => {
  // The initial state is an empty array
  const [plants, setPlants] = useState([]);
  const [journals, setJournals] = useState([]);


  /*  const getPlants = () => {
    // After the data comes back from the API, we
    //  use the setplants function to update state
    return PlantManager.getAll("plants").then(plantsFromAPI => {
      setPlants(plantsFromAPI)
    });
  
   
 */

  const withDetails = () => {
    PlantManager.getWithDetails().then(plantsfromAPI => {
      setPlants(plantsfromAPI)
    });
  }

  // const withJournalDetails = () => {
  //   PlantManager.getWithJournalDetails().then(plantsfromAPI => {
  //     setPlants(plantsfromAPI)
  //   });
  // } 
  

  // from the API on the component's first render

  const deletePlant = (id) => {
    PlantManager.delete(id)
      .then(() => PlantManager.getAll("plants").then(setPlants))
    //.then(getPlants);
  };
 

 const deleteTheJournal = (id) => {
    PlantManager.deleteJournal(id)
      .then(() => PlantManager.getAll("journals").then(setJournals))
    //.then(getPlants);
  };  



  useEffect(() => {
    withDetails();
   //withJournalDetails();
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

          <PlantCard
            key={plant.id}
            plant={plant}
            deletePlant={deletePlant}
            {...props}
         /> )}
         </div>
      </div>

    </>
    
  );
};
export default PlantList;


