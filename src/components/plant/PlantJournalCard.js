import React from "react";
//import "./PlantCard.css"
import "./PlantCard.css"

const PlantJournalCard = (props) => {
  return (

    <>
<div className="flipCard-generator">
        <div className="flip-card">
          <div className="flip-card-inner">

            <div className="flip-card-back">
              <div className="plantcard-journal-title__Container">
                {/* <h1>Journal Entries for {props.plant.nickName}</h1> */}
              </div>
              <div className="plantcard-journal-entries__Container">
  <div className="plantcard-journal-entry__Container">{props.journal.entryDate} {props.journal.journalEntry}</div>
                <button type="submit">Details</button>
              </div>
              <p>We love Plants...</p>
            </div>

          </div>
        </div>
      </div>
</>

  )
}

export default PlantJournalCard; 