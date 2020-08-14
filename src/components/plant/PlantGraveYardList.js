import React, { useState, useEffect } from 'react';

//import PlantCard from './PlantCard';
import GraveYardCard from './GraveYardCard'
import PlantManager from '../../modules/PlantManager';
import "./PlantCard.scss"



const PlantGraveYardList = (props) => {

  const [plants, setPlants] = useState([]);




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





  useEffect(() => {
    withDetails()
  }, []);






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

      <div className="plantCardSeperation">

          {plants.map(plant =>
            //plant.isDead ? null: //TOGGLE FOR PLANT STATUS TO SHOW ONLY FALSE
            !plant.isDead ? null :  //ToGGLE FOR PLANT STATUS TO SHOW ONLY TRUE
              <GraveYardCard
                key={plant.id}
                plant={plant}
                {...props}
              />)}

     
      </div>

    </>

  );
};
export default PlantGraveYardList;