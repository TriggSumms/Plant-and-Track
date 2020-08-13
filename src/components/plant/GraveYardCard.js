
//import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import PlantManager from '../../modules/PlantManager';
//import PlantList from "./PlantList"
import PlantJournalCard from "./PlantJournalCard"

import "./PlantCard.css"


const GraveYardCard = (props) => {

  const [journals, setJournals] = useState([]);
  const [plant, setPlant] = useState({ userId: props.plant.userId, id: props.plant.id, nickName: props.plant.nickName, vernacularName: props.plant.vernacularName, entryDate: props.plant.entryDate, age: props.plant.age, moodId: props.plant.MoodId, sunlightLevelId: props.plant.sunlightLevelId, waterLevelId: props.plant.waterLevelId, isDead: props.plant.isDead });
  //console.log("plantListplant", plant)
  const [isDead, setIsDead] = useState({ isDead: props.isDead })
  const [isLoading, setIsLoading] = useState(true);
  //console.log("plantListJournals", journals)




  const updatePlanttoGraveyard = evt => {
    console.log("brendatest", evt)
    setIsLoading(true);

    //Created a way to change the plant through updateing the plant object....this way a button toggles the cards view between dead/alive    
    //const MessageChanged = "(DEAD PLANT)"
    /* plant.moodId = parseInt( plant.moodId)
    plant.sunlightLevelId = parseInt( plant.sunlightLevelId)
    plant.waterLevelId = parseInt(plant.waterLevelId) */

    let isDeadz = isDead.isDead ? true : false

    const graveYardPlant = {
      userId: props.plant.userId,
      id: props.plant.id,
      nickName: props.plant.nickName,
      vernacularName: props.plant.vernacularName,
      entryDate: props.plant.entryDate,
      //entryDate: props.plant.timeStamp.format(Date.now())
      age: props.plant.age,
      moodId: props.plant.moodId,
      sunlightLevelId: props.plant.sunlightLevelId,
      waterLevelId: props.plant.waterLevelId,
      isDead: isDeadz
    };
    console.log("graveyardclickTEST", graveYardPlant)
    PlantManager.updatePlant(graveYardPlant)
      .then(() => props.history.push("/home"))
  }





  //This is the function responsible for bringing in the journal entries for the mapped PLANTJOURNALCARD

  const expandedPlantandJournal = () => {
    PlantManager.getWithSpecificJournals(props.plant.id)
      .then(APIres => {
        console.log("plantCARdGETWITHs2", APIres)
        setJournals(APIres)
      }
      )
  }
  //END JOURNAL FUNCTION




  useEffect(() => {

    expandedPlantandJournal()
    setIsLoading(false);
  }, [props.plantId]);




  const currentUser = parseInt(sessionStorage.getItem("activeUser"))

  if (props.plant.userId === currentUser) 
  {
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
              <div className="plantcard-logo">
                  <div className="text" data-toggle="buttons">
                    <label className="btn btn-sm active"> <input type="checkbox" id={props.plant.id} checked={isDead.isDead} onChange={updatePlanttoGraveyard} /><img src="https://img.icons8.com/plasticine/50/000000/undo.png" alt="button-generic"/></label>
                  </div>
                  </div>
                <div className="plantcard-variable-list__Container">
                  <ol className="VariableEntry"> Plant Specs. </ol>
                  <div className="TitleVariable">Age of your plant:<p className="VariableEntry1"> {props.plant.age}</p></div>
                  <div className="TitleVariable"> Created on: <p className="VariableEntry2"> {props.plant.entryDate} </p></div>
                  <div className="TitleVariable">Sunlight Level Req. :<p className="VariableEntry1"> {props.plant.sunlightLevel.level}</p> </div>
                  <div className="TitleVariable">Water Level Req. : <p className="VariableEntry1">{props.plant.waterLevel.level} </p></div>
                  <div className="TitleVariable">Mood of your plant this Week?:<p className="VariableEntry3"> {props.plant.mood.level}</p> </div>

                  

                    {/*  <form>
                    <p>
                        <label htmlFor="checkbox">
                           <input type="checkbox" id={props.plant.id} name="isDead" checked={isDead.isDead}  onChange={updatePlanttoGraveyard} /> 
                          <span>Is the Plant Dead: {props.plant.isDead ? 'true' : 'false'}</span>
                        </label>
                      </p>
                    </form> */}



                    {/*            
                    <label htmlFor="IsDead"> Is the Plant Dead: {props.plant.isDead ? 'true' : 'false'} </label>
                    <input type="checkbox" id= "isDead" name="IsDead" value={props.plant.idDead} onChange={() => props.updateForGarbagePlant(graveYardPlant)}></input>
                     {/* <input type="checkbox" className="form-control" id="checkbox" checked={props.plant.isDead} value={props.plant.idDead} onChange={handleFieldChange} />
        */}

                    {/* <Link to={`/plants/${props.plant.id}`}><button>Lets take a closer look!</button></Link> */}
                  
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
                      <div className="plantcard-journal-title__Container">
                        <h1>Journal Entries for {props.plant.nickName}</h1>
                      </div>
                      <div className="plantcard-journal-entries__Container">

                        {/* <button type="button" className="waves-effect waves-light btn" onClick={() => { props.history.push("/journals/new/") }}> New Journal Entry ?</button> */}
                        {/* <Link to={`/journals/${props.plant.id}/new/`}><button>NEW PLANT BABY</button></Link> */}
                        {/* YEAH SON...<button type="button" className="waves-effect waves-light btn-small" onClick={() => { props.history.push(`/plants/${props.plant.id}/newjournal`) }}> New Journal Entry ?</button> */}
                        <div className="plantcard-journal-entry__Container">
                          <div>
                            {journals.map(journal =>
                              <PlantJournalCard
                                key={journal.id}
                                journalEntry={journal}
                                {...props}
                              />)}
                          </div>
                        </div>
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
else return null
}

export default GraveYardCard;