//import React from "react";
//import { Link } from "react-router-dom";
import React from 'react';
//import "./PlantCard.css"
import "./PlantCard.css"


const PlantJournalCard = (props) => {

  return (




    <>

      {/*START OF WHATS BEING SENT TO PLANT CARD  */}
      {/*    <div className="plantcard-journal-entry__Container">
                  <div className="card horizontal">
                    <div className="col s12 ">
                      <div className="card #c5e1a5 light-green lighten-3">
                    <div className="card-content black-text">
                      <h6><p className="journalCardDate" >{props.journalEntry.entryDate}</p>{props.journalEntry.journalTitle}<button className="danger" type="button" onClick={() => props.history.push(`/journals/${props.journalEntry.id}`)}>Details</button></h6>      
                      
                          <p className="truncate"  >{props.journalEntry.journalEntry}</p>

                           */}

      <div className="plantcard-journal-entryContainer">
        <h2 className="journalCardDate"><strong>{props.journalEntry.journalTitle}</strong></h2>
        <div>{props.journalEntry.entryDate}<button className="message__buttons" type="button" onClick={() => props.history.push(`/journals/${props.journalEntry.id}`)}>Details</button></div>
        <h4 className="truncate" >{props.journalEntry.journalEntry} </h4>
      </div>

      {/*     </div>
                      </div>
                    </div>
                  </div>
                </div> */}
      {/*END OF WHATS BEING SENT TO PLANT CARD  */}

    </>

  )
}

export default PlantJournalCard; 