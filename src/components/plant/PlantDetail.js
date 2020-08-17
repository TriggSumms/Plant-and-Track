//import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import PlantManager from '../../modules/PlantManager';
import ImageManager from '../../modules/ImageManager'
import ReactCardFlip from 'react-card-flip';
import PlantJournalCard from "./PlantJournalCard"
import ImageCard from "./ImageCard"
//import "./PlantDetails.css"





//Method for Creating Time Stamp in readeable form(mdn docs)...
let timeStamp = new Intl.DateTimeFormat("en", {
  timeStyle: "medium",
  dateStyle: "short"
});

//User clicks details button thus rendering the animals info
const PlantDetail = props => {
  const [plant, setPlant] = useState({ userId: 0, id: 0, nickName: "", vernacularName: "", entryDate: timeStamp.format(Date.now()), age: "", moodId: 0, sunlightLevelId: 0, waterLevelId: 0, isDead: false });
  const [journals, setJournals] = useState([]);
  const [images, setImages] = useState([])
  const [mood, setMood] = useState({ level: 0 });
  const [sunlightLevel, setSunlightLevel] = useState({ level: 0 });
  const [waterLevel, setWaterLevel] = useState({ level: 0 });
  const [isDead, setIsDead] = useState({ isDead: props.isDead })
  const [isLoading, setIsLoading] = useState(true);
  //console.log("yee", plant)
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };




  //Important Lesson learned below: if your gonna set the state.....dont pinpoint the property inside the "expandedPlant"
  //...it turns out that React cant pinpoint cause your nesting too deep. Rather pass the object and then set directions in the return.

  //START OF EXAPNSION FETCH CALLS
  const expandedPlant = () => {
    PlantManager.getWithSingleDetails(props.plantId)
      .then(plant => {
        //console.log("yeettttt2", plant)
        setPlant(plant)
        setMood(plant.mood)
        setSunlightLevel(plant.sunlightLevel)
        setWaterLevel(plant.waterLevel)
      }
      )
  }

  const expandedPlantandJournal = () => {
    PlantManager.getWithSpecificJournals(props.plantId)
      .then(APIres => {
        //console.log("plantjourn", APIres)
        setJournals(APIres)
      }
      )
  }

  const expandedPlantandImage = () => {
    ImageManager.getWithSpecificImages(props.plantId)
      .then(APIres => {
        console.log("images", APIres)
        setImages(APIres)
      }
      )
  }
  //END OF EXPANSION FETCH




  const updatePlanttoGraveyard = evt => {
    // console.log("brendatest", evt)
    evt.preventDefault()
    setIsLoading(true);

    let isDeadz = isDead.isDead ? false : true

    const graveYardPlant = {
      userId: plant.userId,
      id: plant.id,
      nickName: plant.nickName,
      vernacularName: plant.vernacularName,
      entryDate: plant.entryDate,
      entryDate: timeStamp.format(Date.now()),
      age: plant.age,
      moodId: plant.moodId,
      sunlightLevelId: plant.sunlightLevelId,
      waterLevelId: plant.waterLevelId,
      isDead: isDeadz
    };
    //console.log("graveyardclickTEST", graveYardPlant)
    PlantManager.updatePlant(graveYardPlant)
      .then(() => props.history.push("/home"))
    //window.location.reload(false);
  }


  useEffect(() => {
    expandedPlant()
    expandedPlantandJournal()
    expandedPlantandImage()
    setIsLoading(false);

  }, [props.plantId]);


  const handleDelete = () => {
    setIsLoading(true);
    PlantManager.deletePlant(plant.id).then(() =>
      props.history.push("/home")
    );
  };



  const currentUser = parseInt(sessionStorage.getItem("activeUser"))
  if (plant.userId === currentUser) {

    return (

      <>
        <div className="centeringdetailsCARD">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

            <div className="flip-card-front" key="front">
              <div className="flip-card-front">
                <div className="plantcard-names__Container">
                  <div className="plantcard-vernacular-name__Container">{plant.vernacularName}</div>
                  <div className="plantcard-nick-name__Container">{plant.nickName}</div>
                </div>
                <div className="plantcard-logo-variable__Container">
                  <div className="plantcard-logo">
                    <div className="text-white" data-toggle="buttons">
                      <label className=""> <input type="checkbox" id={plant.id} checked={isDead.isDead} onChange={updatePlanttoGraveyard} /><img src="https://img.icons8.com/plasticine/32/000000/headstone.png" alt="button-generic" /></label>
                    </div>
                    <button className="danger" type="button" onClick={() => props.history.push(`/plants/${plant.id}/edit`)}><img src="https://img.icons8.com/plasticine/32/000000/edit.png" alt="button-generic" /></button>
                    <button type="button" className="" onClick={() => { props.history.push(`/plants/${props.plantId}/newimage`) }}> <img src="https://img.icons8.com/plasticine/32/000000/image-file.png" alt="button-generic" /></button>
                   <button className="" type="button" onClick={() => handleDelete(plant.id)}><img src="https://img.icons8.com/plasticine/32/000000/delete-forever.png" alt="button-generic" /></button>
                   <button onClick={handleClick}><img src="https://img.icons8.com/clouds/30/000000/swap.png" /></button>
                  </div>
                  <div className="plantcard-variable-list__Container">
                    <ol className="VariableEntryTitle"> Plant Specs. </ol>
                    <div className="TitleVariable">Age of your plant:<p className="VariableEntry1"> {plant.age}</p></div>
                    <div className="TitleVariable"> Created on: <p className="VariableEntry2"> {plant.entryDate} </p></div>
                    <div className="TitleVariable">Sunlight Level Req. :<p className="VariableEntry1"> {sunlightLevel.level}</p> </div>
                    <div className="TitleVariable">Water Level Req. : <p className="VariableEntry1">{waterLevel.level} </p></div>
                    <div className="TitleVariable">Mood of your plant this Week?:<p className="VariableEntry3"> {mood.level}</p> </div>
                  </div>
                </div>
                <div className="plantcard-image__Container">
                <div className="plantcard__image-window__Container">
     {/* This is where the cloudinary Window "scroll" series will go */}
     <div className="plantImgCardsContainer">
                  {images.map(image =>
                    <ImageCard
                      key={image.id}
                      imageEntry={image}
                      {...props}
                    />)}
                </div>

{/*                 <CloudFiles {...props} />
                {props.plant.plantUrl} */}

              </div>
            </div>
            
                </div>

                {/* This is where the cloudinary Window "scroll" series will go */}

              </div>
         

            {/* <PlantCardBack /> */}
            <div className="flip-card-back" key="back">
              <div className="plantcard-journal-title__Container">
                Journal Entries: <p className="plantCardBackName"> {plant.nickName}</p>
              </div>
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
              <div className="plantCard-journal-button-Container">
              <button onClick={handleClick}><img src="https://img.icons8.com/clouds/50/000000/swap.png" /></button>
                <button type="button" className="waves-effect waves-light btn-small" onClick={() => { props.history.push(`/plants/${plant.id}/newjournal`) }}> <img src="https://img.icons8.com/plasticine/35/000000/create-new.png" alt="button-generic" /></button>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </>

    )
  }
  else return null
}


export default PlantDetail;