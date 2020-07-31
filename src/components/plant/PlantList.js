import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import PlantManager from '../../modules/PlantManager';


const PlantList = (props) => {
  // The initial state is an empty array
  const [plants, setPlants] = useState([]);

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

  // from the API on the component's first render

  const deletePlant = (id) => {
    PlantManager.delete(id)
      .then(() => PlantManager.getAll("plants").then(setPlants))
    //.then(getPlants);
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

      <div className="flipCard-generator">
        {plants.map(plant =>
          <PlantCard
            key={plant.id}
            plant={plant}
            deletePlant={deletePlant}
            {...props}
          />)}
      </div>

    </>
  );
};
export default PlantList;