//import React from "react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import PlantManager from '../../modules/PlantManager';
//import PlantList from "./PlantList"
import PlantJournalCard from "./PlantJournalCard"

import "./PlantCard.css"


const PlantCard = (props) => {
  
  const [journals, setJournals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("plantCARdGETWITHs1", journals)


  const expandedPlantandJournal = () => {
    PlantManager.getWithSpecificJournals(props.plant.id)
      .then(APIres => {
        console.log("plantCARdGETWITHs2", APIres)
        setJournals(APIres)
      }
      )
  }


  useEffect(() => {

    expandedPlantandJournal()
    setIsLoading(false);

  }, [props.plant.id]);




  return (
    <>

      <div className="flipCard-generator">
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
                  <ol> Plant Specs.
                  <li> Age of plant: {props.plant.age}</li>



                    <li>Created on {props.plant.entryDate} </li>
                    <li>Sunlight Level: {props.plant.sunlightLevel.level} </li>
                    <li>Water Level: {props.plant.waterLevel.level} </li>
                    <li>Mood of your plant: {props.plant.mood.level} </li>
                    <li>Is your Plant DEAD: {props.plant.isDead}</li>
                    <Link to={`/plants/${props.plant.id}`}><button>Lets take a closer look!</button></Link>
                  </ol>
                </div>
              </div>
              <div className="plantcard-image__Container">
                <div className="plantcard__image-window__Container"> CAROUSEL INSERT
     {/* This is where the cloudinary Window "scroll" series will go */}
                </div>
              </div>

              {/* <button type="submit">Add Image</button><button className="" type="button" onClick={() => props.deletePlant(props.plant.id)}>Delete</button> */}
              {/* <button className="message__buttons" type="button" onClick={() => props.history.push(`/messages/${props.message.id}/edit`)}>Edit</button> */}

            </div>
            <div className="flip-card-back">

              <div className="flipCard-generator">
                <div className="flip-card">
                  <div className="flip-card-inner">

                    <div className="flip-card-back">
                      {/* <PlantJournalCard />  */}
                      <div className="plantcard-journal-title__Container">


                        <h1>Journal Entries for {props.plant.nickName}</h1>
                      </div>

                      <div className="plantcard-journal-entries__Container">
                        YEAH SON...
                        <button type="button" className="waves-effect waves-light btn" onClick={() => { props.history.push("/journals/new") }}> New Journal Entry ?</button>
                        {/* YEAH SON...<button type="button" className="waves-effect waves-light btn" onClick={() => { props.history.push("/journals/${props.plant.id}/new") }}> New Journal Entry ?</button>  */}
                        <div className="plantcard-journal-entry__Container">
                          <div>
                            {journals.map(journal =>

                              <PlantJournalCard
                                key={journal.id}
                                journalEntry={journal}
                                // deleteTheJournal={deleteTheJournal}
                                {...props}
                              />)}
                          </div>
                        </div>
                        {/*{journal.journalEntry} {journal.entryDate} </div>  
                <button type="submit">Details</button> */}
                        {/* <PlantJournalCard /> */}
                      </div><p>We love Plants...</p></div>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default PlantCard;