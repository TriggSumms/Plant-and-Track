import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import PlantManager from '../../modules/PlantManager';


const PlantList = (props) => {
  // The initial state is an empty array
  const [plants, setPlants] = useState([]);

  const getPlants = () => {
    // After the data comes back from the API, we
    //  use the setplants function to update state
    return PlantManager.getAll().then(plantsFromAPI => {
      setPlants(plantsFromAPI)
    });
  };



  // from the API on the component's first render

  const deletePlant = (id) => {
    PlantManager.delete(id)
      .then(() => PlantManager.getAll().then(setPlants))
      //.then(getPlants);
  };
  useEffect(() => {
    getPlants();
  }, []);

  // Mapping through 
  return (
    <>
   {/*        <div className="undertheBannerMiddle">
  <div className="undertheBannerMiddle-Left__Container"></div>
  <div className="undertheBannerMiddle-Center__Container">
    <div className="plantCards-Center__Container">       
     
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-4 mb-4 grid-margin">
                <div className="card h-100">
                 <div className="flip=cards-insert"></div>
   */} 

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
{/*  </div></div></div></div></div></div></div>*/}
    </>
  );
};
export default PlantList;