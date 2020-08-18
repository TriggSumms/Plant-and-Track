//import React from "react";
//import { Link } from "react-router-dom";
import React from 'react';
//import { Toast } from 'react-bootstrap';
import "./PlantCard.css"



const PlantJournalCard = (props) => {



  return (

    <>

      {/*START OF WHATS BEING SENT TO PLANT CARD  */}

      <div className="container-s">

        <div className="messageTitle"> {props.journalEntry.journalTitle}</div>
        <div className="messageDate">{props.journalEntry.entryDate}</div>
        <div className="messageEntry">
          <div className="truncate"> {props.journalEntry.journalEntry} </div>
        </div>

        <button className="message__buttons" type="button" onClick={() => props.history.push(`/journals/${props.journalEntry.id}`)}>DETAILS</button>
      </div>


    </>

  )
}

export default PlantJournalCard; 