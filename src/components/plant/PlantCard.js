import React from "react";
//import PlantCardBack from "./plantJournal/PlantJournalCard"
import "./PlantCard.css"
import { Container } from 'react-bootstrap';


const PlantCard = () => {
  return (

    <>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
       {/* <picture src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-sQ07TYg3ma4%2FUsREyy8h2xI%2FAAAAAAAAAFc%2FWXZw3up8Zh0%2Fs1600%2Fartshare_ru-plants-5.png&f=1&nofb=1" alt="Avatar" className= "img__planttest"> </picture> */}
<div className="plantcard-names__Container">
      <div className="plantcard-vernacular-name__Container">Plant vernacularName</div>
      <div className="plantcard-nick-name__Container">Plant nickName</div>
       </div>
       <div className="plantcard-logo-variable__Container">
       <div className="plantcard-logo"></div>
      <div className="plantcard-variable-list__Container">
            <ol> Plant Specs. </ol>
              <li> Dang Age of plant</li>
             <li> Dang time Stamp</li>
             <li> Dang colorTag</li>
             <li> Dang Sunlight</li>
             <li> Dang Water</li>
             <li> Dang Mood</li>    
      </div>
      </div> 
      <div className="plantcard-image__Container">
     <div className="plantcard__image-window__Container">
     {/* This is where the cloudinary Window "scroll" series will go */} 
    </div>
    </div>
    <button type="submit">Add Image</button>
    
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
</>

  )
}

export default PlantCard;