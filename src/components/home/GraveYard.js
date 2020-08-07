
import React, { useState, useEffect } from 'react';

//import PlantList from "../plant/PlantList"
import "./Home.css";
import PlantList from "../plant/PlantList";
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
      




      {/*   
    <div className="theAppUnderBanner">
    
      <div className="undertheBannerMiddle">
  <div className="undertheBannerMiddle-Left__Container"></div>
  <div className="undertheBannerMiddle-Center__Container">
    <div className="plantCards-Center__Container">       
  
           <div className="container">
            <div className="row mt-5">
              <div className="col-lg-4 mb-4 grid-margin">
                <div className="card h-100">
                 <div className="flip=cards-insert"> */}
      {/* <PlantCard /> */}

      {/*            </div>
                </div>
              </div>
            </div> 
          </div>
        
      </div>
      </div>
  </div>
  <div className="undertheBannerMiddle-Right__Container"></div>
  
  
  
  </div>
 */}
    </>
  )
};

export default GraveYard;