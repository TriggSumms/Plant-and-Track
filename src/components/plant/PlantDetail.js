import React, { useState, useEffect } from 'react';
import PlantManager from '../../modules/PlantManager';
//import './AnimalDetail.css'
import PlantJournalCard from "./PlantJournalCard"

//Method for Creating Time Stamp in readeable form(mdn docs)...
let timeStamp = new Intl.DateTimeFormat("en", {
  timeStyle: "medium",
  dateStyle: "short"
});

//User clicks details button thus rendering the animals info
const PlantDetail = props => {
  const [plant, setPlant] = useState({ userId: 0, id: 0, nickName: "", vernacularName: "", entryDate: timeStamp.format(Date.now()), age: "", moodId: 0, sunlightLevelId: 0, waterLevelId: 0, isDead: false });
  const [journals, setJournals] = useState([]);
  const [mood, setMood] = useState({ level: 0 });
  const [sunlightLevel, setSunlightLevel] = useState({ level: 0 });
  const [waterLevel, setWaterLevel] = useState({ level: 0 });

  const [isLoading, setIsLoading] = useState(true);
  console.log("yee", plant)


  //Important Lesson learned below: if your gonna set the state.....dont pinpoint the property inside the "expandedPlant"
  //...it turns out that React cant pinpoint cause your nesting too deep. Rather pass the object and then set directions in the return.

  const expandedPlant = () => {
    PlantManager.getWithSingleDetails(props.plantId)
      .then(plant => {
        console.log("yeettttt2", plant)
        setPlant(plant)
        setMood(plant.mood)
        setSunlightLevel(plant.sunlightLevel)
        setWaterLevel(plant.waterLevel)
      }
      )
  }


  
  const expandedPlantandJournal = () => {
    PlantManager.getWithSpecificJournals(plant.id)
      .then(APIres => {
        console.log("plantCARdGETWITHs2", APIres)
        setJournals(APIres)
      }
      )
  }




  useEffect(() => {
    expandedPlant()
    expandedPlantandJournal()
    setIsLoading(false);

  }, [props.plantId]);


  const handleDelete = () => {
    setIsLoading(true);
    PlantManager.delete(plant.id).then(() =>
      props.history.push("/plants")
    );
  };


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
                  <li>Sunlight Level: {sunlightLevel.level} </li>
                  <li>Water Level: {waterLevel.level} </li>
                  <li>Mood of your plant: {mood.level} </li>
                  {/*       <li>Is your Plant DEAD: {props.plant.isDead}</li>      */}
                </div>
              </div>
              <div className="plantcard-image__Container">
                <div className="plantcard__image-window__Container"> CAROUSEL INSERT
     {/* This is where the cloudinary Window "scroll" series will go */}
                </div>
              </div>
              <button type="submit">Add Image</button><button className="" type="button" onClick={() => handleDelete(plant.id)}>Delete</button>
              <button className="danger" type="button" onClick={() => props.history.push(`/plants/${plant.id}/edit`)}>Edit</button>


            </div>
            {/* <PlantCardBack /> */}
            <div className="flip-card-back">
              <div className="flipCard-generator">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-back">
                      <div className="plantcard-journal-title__Container">
                        <h1>Journal Entries for {plant.nickName}</h1>
                      </div>
                      <div className="plantcard-journal-entries__Container">
                        YEAH SON...<button type="button" className="waves-effect waves-light btn-small" onClick={() => { props.history.push(`/plants/${plant.id}/newjournal`) }}> New Journal Entry ?</button>
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


export default PlantDetail;