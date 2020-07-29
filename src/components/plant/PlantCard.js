import React from "react";
//import PlantCardBack from "./plantJournal/PlantJournalCard"
import "./PlantCard.css"
//import { Container } from 'react-bootstrap';


const PlantCard = (props) => {
  //makes sure that userid is an integer
/*    const currentUser = parseInt(sessionStorage.getItem("activeUser"))
        if (props.plant.userId === currentUser)  
 */


/* // Get all the `.card` elements
let card = document.getElementsByClassName('card');

// Loop through all the card elements
Array.from(card).forEach((card) => {

   // Track the clicks on the card element
   card.addEventListener('click', () => {

    // Toggle the `flippedstate` CSS class
    card.classList.toggle('flip-card-inner');
    console.log("Card clicked!");
  });
});
 */
  return (
    <>
<div className="flip=cards-insert">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
       
<div className="plantcard-names__Container">
      <div className="plantcard-vernacular-name__Container">{props.plant.vernacularName}</div>
      <div className="plantcard-nick-name__Container">{props.plant.nickName}</div>
       </div>
       <div className="plantcard-logo-variable__Container">
       <div className="plantcard-logo"></div>
      <div className="plantcard-variable-list__Container">
            <ol> Plant Specs. </ol>
              <li> Age of plant: {props.plant.age}</li>
             <li>Created on {props.plant.entryDate} </li>
             <li> Dang colorTag</li>
             <li>Sunlight Level: {props.plant.sunlightId}</li>
             <li>Water level: {props.plant.waterId}</li>
             <li>Mood of your plant: {props.plant.moodId}</li>    
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

export default PlantCard;