
import React, { useState, useEffect } from 'react';

//import PlantList from "../plant/PlantList"
import "./Home.css";
import PlantList from "../plant/PlantList";
import PlantCard from "../plant/PlantCard"


const Home = props => {
/*   const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([])
  const [plants, setPlants] = useState([]); */



/* 

  useEffect(() => {
    setFilteredPlants(
      plants.filter(plant =>
        plant.nickName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, plants]);
       <input
        type="text"
        placeholder="Search via NickName"
        onChange={evt => setSearch(evt.target.value)}
      /> */



      
  return (
    <>
     
        <header></header>
        <div id="main">
          <article>
        <button type="button" className="waves-effect waves-light btn"
        onClick={() => { props.history.push("/plants/new") }}>
        New Plant Baby ?
        </button>

 
      

            <div className="plantCards-Center__Container">
               <PlantList />
              
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

export default Home;