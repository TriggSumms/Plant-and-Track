
import React, { useState, useEffect } from 'react';

//import PlantList from "../plant/PlantList"
import "./Home.css";
//import PlantList from "../plant/PlantList";
import PlantGraveYardList from '../plant/PlantGraveYardList';
//import PlantCard from "../plant/PlantCard"
//import PlantManager from '../../modules/PlantManager';


const GraveYard = props => {

/*   const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([])
  const [plants, setPlants] = useState([]); 




  const withDetails = () => {
    PlantManager.getWithDetails("plants").then(plantsfromAPI => {
      setPlants(plantsfromAPI)
    });
  }

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
 
  <div className="ButtonandSearchList">
  <fieldset>
<input
        type="text"
        placeholder="Search via NickName"
        onChange={evt => setSearch(evt.target.value)}
      />
     </fieldset> 
      </div> 

 */

      
  return (
    <>
     
        <header></header>
        <div id="main">
          <article>

    
            <div className="plantCards-Center__Container">
               <PlantGraveYardList 
               {...props}
               />
              
            </div>
          </article>
          <nava></nava>
          <aside></aside>
        </div>
        <footer></footer>
      
    </>
  )
};

export default GraveYard;