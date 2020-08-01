import React, { useState, useEffect } from 'react';
import PlantManager from '../../modules/PlantManager';
//import './AnimalDetail.css'


//Method for Creating Time Stamp in readeable form(mdn docs)...
let timeStamp = new Intl.DateTimeFormat("en", {
  timeStyle: "medium",
  dateStyle: "short"
});

//User clicks details button thus rendering the animals info
const PlantDetail = props => {
  const [plant, setPlant] = useState({ userId: 0, id: 0, nickName: "", vernacularName: "", entryDate: timeStamp.format(Date.now()), age: "", moodId: 0, sunlightLevelId: 0, waterLevelId: 0, isDead: true });
  // const [plants, setPlants] = useState([]);
  const [mood, setMood] = useState({ level: "" });
  const [sunlightLevel, setSunlightLevel] = useState({ level: "" });
  const [waterLevel, setWaterLevel] = useState({ level: "" });

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


  useEffect(() => {
    expandedPlant()
    setIsLoading(false);

  }, [props.plantId]);




  const handleDelete = () => {
    //invoke the delete function  and re-direct to the  list.
    setIsLoading(true);
    PlantManager.deletePlant(props.plantId).then(() =>
      props.history.push("/home")
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
                  {/* <li> Dang colorTag</li> */}

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
              <button type="submit">Add Image</button><button type="button" disabled={isLoading} onClick={handleDelete}>DELETE</button>
              <button className="danger" type="button" onClick={() => props.history.push(`/plants/${plant.id}/edit`)}>Edit</button>


            </div>
            {/* <PlantCardBack /> */}
            <div className="flip-card-back">
              <div className="plantcard-journal-title__Container">
                <h1>Your Plants Journal Entries</h1>
              </div>
              <div className="plantcard-journal-entries__Container">
                <div className="plantcard-journal-entry__Container">Journal Entry: (1)....</div>
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

