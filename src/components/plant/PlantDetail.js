import React, { useState, useEffect } from 'react';
import PlantManager from '../../modules/PlantManager';
//import './AnimalDetail.css'



//User clicks details button thus rendering the animals info
const PlantDetail = props => {
  const [plant, setPlant] = useState({ });
  const [isLoading, setIsLoading] = useState(true);
//Is loading is used to make sure the component is in a state (not loaded?)

  useEffect(() => {
    //get(id) from Manager and hang on to the data; put it into state
    PlantManager.get(props.plantId)
      .then(plant => {
        setPlant({
          id: props.match.params.plantId,
          nickName: plant.nickName,
          vernacularName: plant.vernacularName,
          age: plant.age
        /*        
        moodId: plant.moodId,
          sunlightId: plant.sunlightId,
          waterId: plant.waterId,
          isDead: plant.isDead
          */
          
        })
        setIsLoading(false);
      });
  }, [props.plantId]);

  const handleDelete = () => {
    setIsLoading(true);
    PlantManager.delete(props.plantId).then(() =>
      props.history.push("/plants")
    );
  };

/*~~~~~~>Trying to create a process to attach edit button to just the details section...
   const handleEdit = () => {
    //invoke the edit and update function .
    setIsLoading(true);
    Manager.updateAnimal(props.animalId).then(() =>
    props.history.push(`/animals/${props.animal.id}/edit`)
    );
  }; 
*/


  return (
   
        <>
    <div className="flipCard-generator">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
           
    <div className="plantcard-names__Container">
          <div className="plantcard-vernacular-name__Container">{plant.vernacularName}</div>
          <div className="plantcard-nick-name__Container">{plant.nickName}</div>
           </div>
           <div className="plantcard-logo-variable__Container">
           <div className="plantcard-logo"></div>
          <div className="plantcard-variable-list__Container">
                <ol> Plant Specs. </ol>
                  <li> Age of plant: {plant.age}</li>
                 <li>Created on {plant.entryDate} </li>
                 {/* <li> Dang colorTag</li> */}
                 <li>Sunlight Level: {plant.sunlightId}</li>
                 <li>Water level: {plant.waterId}</li>
                 <li>Mood of your plant: {plant.moodId}</li>    
          </div>
          </div> 
          <div className="plantcard-image__Container">
         <div className="plantcard__image-window__Container"> CAROUSEL INSERT
         {/* This is where the cloudinary Window "scroll" series will go */} 
        </div>
        </div>
        <button type="submit">Add Image</button><button className="" type="button" onClick={() => props.deletePlant(props.plant.id)}>Delete</button>
                    {/* <button className="message__buttons" type="button" onClick={() => props.history.push(`/messages/${props.message.id}/edit`)}>Edit</button> */}
        
        </div>
    
        {/* <PlantCardBack /> */}
        <div className="flip-card-back">
        <div className="plantcard-journal-title__Container">
             <h1>Your Plants Journal Entries</h1>
           </div>
           <div className= "plantcard-journal-entries__Container">
          <div className= "plantcard-journal-entry__Container">Journal Entry: (1)....</div>
          <button type="submit">Details</button>
          </div>
          
    
    {/*       <div>Journal Entry: (2)....</div>
          <button type="submit">Details</button>
          <div>Journal Entry: (3)....</div>
         <button type="submit">Details</button>
          <div>Journal Entry: (4)....</div>
          <button type="submit">Details</button> */}
    
          <p>We love Plants...</p>
          </div>
       
    </div>
    </div>
    </div>
    </>
    
      )
    }
     

export default PlantDetail;

