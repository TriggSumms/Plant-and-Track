import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PlantCard from './PlantCard';
import PlantJournalCard from "./PlantJournalCard"
import PlantManager from '../../modules/PlantManager';
import "./PlantCard.css"
import PlantList from "./PlantList"



const PlantGraveYardList = (props) => {

  const [plants, setPlants] = useState([]);
  const [journals, setJournals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  /* 
      const getPlants = () => {
      return PlantManager.getAll("plants").then(plantsFromAPI => {
        setPlant(plantsFromAPI)
      });
      }
      */
/* 
  const expandedPlantandJournal = () => {
    PlantManager.getWithSpecificJournals(plants.id)
      .then(APIres => {
        console.log("plantCARdGETWITHs2", APIres)
        setJournals(APIres)
      }
      )
  } */

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





  if (plants.isDead == false) {

    return (
      <div>
        

          <PlantList />
      </div>


    )
  }
  else {

    return (
<div>
      {plants.map(plant =>

        <PlantCard
          key={plant.id}
          plant={plant}
          //deletePlant={deletePlant}
          // {plant.isDead ? undefined : }
          {...props}
       /> )}
       </div>
  
    )
  }

  //   )
};
export default PlantGraveYardList;