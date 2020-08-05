import React, { useState, useEffect } from "react"
import PlantManager from "../../modules/PlantManager"
import {Form} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';


const PlantEditForm = props => {
    const [plant, setPlant] = useState({userId: 0, nickName: "", vernacularName: "", entryDate: "", age: "", moodId: 0, sunlightLevelId: 0, waterLevelId: 0, isDead: false  });
    const [isLoading, setIsLoading] = useState(false);
    const [moods, setMoods] = useState([]);
    const [sunlightLevels, setSunlightLevels] = useState([]);
    const [waterLevels, setWaterLevels] = useState([]);




    const handleFieldChange = evt => {
        const stateToChange = { ...plant };
        stateToChange[evt.target.id] = evt.target.value;
        setPlant(stateToChange);
    };

    const getMoods = () => {
        return PlantManager.getAll("moods").then(moodsfromAPI => {
            setMoods(moodsfromAPI)
        })
    };
    const getSunlightLevels = () => {
        return PlantManager.getAll("sunlightLevels").then(sunlightLevelsfromAPI => {
            setSunlightLevels(sunlightLevelsfromAPI)
        })
    };
    const getWaterLevels = () => {
        return PlantManager.getAll("waterLevels").then(waterLevelsfromAPI => {
            setWaterLevels(waterLevelsfromAPI)
        })
    };





    const updateExistingPlant = evt => {
        //Stops the pg from loading on every click...
        evt.preventDefault()
        setIsLoading(true);

      //Created an easy tag to post to the return edit card.... for showing chats when they are edited     
      const MessageChanged = "(~Edited Since~)"
      plant.moodId = parseInt( plant.moodId)
      plant.sunlightLevelId = parseInt( plant.sunlightLevelId)
      plant.waterLevelId = parseInt(plant.waterLevelId)
        // This is an edit, so we need the id
        const editedPlant = {
            userId: plant.userId,
            id: props.match.params.plantId,
            nickName: plant.nickName,
            vernacularName: plant.vernacularName,
            entryDate: plant.entryDate + MessageChanged,
            age: plant.age,
            moodId: plant.moodId,
            sunlightLevelId: plant.sunlightLevelId,
            waterLevelId: plant.waterLevelId,
            isDead: false  

        };
        PlantManager.updatePlant(editedPlant)
            .then(() => props.history.push("/home"))
    }
    
        useEffect(() => {
            PlantManager.getPlant(props.match.params.plantId)
                .then(plant => {
                   
                        setPlant(plant);
                        getMoods();
                        getSunlightLevels();
                        getWaterLevels();
                        setIsLoading(false);

                });
        }, [props.match.params.plantId]);
        //Filling the dependency array allows the change made to rerender the Animal
    

    return (

        <>
            <div className="row">
                <div className="col s12 m5">
                    <div className="card-panel transparent">
                        <div className="row">
                            <form className="col s12">
                            <div className="formgrid">
                            <input
                            type="hidden"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="userId"
                            value={plant.userId}
                        />
                                <div className="row">
                                    <div className="input-field col s6">
                                        Vernacular Name:
            <input placeholder="Enter in your plants English common name:" id="vernacularName" type="text" required
                                            onChange={handleFieldChange} className="validate" value={plant.vernacularName}></input>
                                        <label for="vernacularName"></label>
                                    </div>
                                    <div className="input-field col s6">
                                        Plants NickName:
          <input placeholder="What would you like to call your plant?" id="nickName" type="text" required
                                            onChange={handleFieldChange} class="validate" value={plant.nickName}  ></input>
                                        <label for="nickName"></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        What is the Age of your plant:
          <div className="input-field inline">
                                            <input placeholder="How many days...old?" id="age" type="text" required
                                                onChange={handleFieldChange} className="validate" value={plant.age}></input>
                                            <label for="age"></label>
                                        </div>
                                    </div>
                                </div>
                                


                                <div className="kk">
                                    <Form.Group controlId="moodId">
                                        <Form.Label>Plant Mood:</Form.Label>
                                       
                                        <Form.Control as="select" className="moodForm"
                                            value={parseInt(plant.moodId)} id="moodId" required
                                            onChange={handleFieldChange}  >
                                            {moods.map(mood =>
                                                <option key={mood.id} value={parseInt(mood.id)}>{mood.level}</option>)} 
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="kk">
                                    <Form.Group  controlId="sunlightLevelId">
                                        <Form.Label>Sunlight Level:</Form.Label>
                                        <Form.Control as="select" className="sunlightLevelForm"
                                            value={parseInt(plant.sunlightLevelId)} id="sunlightLevelId"   required
                                            onChange={handleFieldChange}  >
                                            {sunlightLevels.map(sunlightLevel =>
                                                <option key={sunlightLevel.id} value={parseInt(sunlightLevel.id)}>{sunlightLevel.level}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="kk">
                                    <Form.Group  controlId="waterLevelId">
                                        <Form.Label>Water Level:</Form.Label>
                                        <Form.Control as="select" className="waterLevelForm"
                                            value={parseInt(plant.waterLevelId)} id="waterLevelId"  required
                                            onChange={handleFieldChange}  >
                                            {waterLevels.map(waterLevel =>
                                                <option key={waterLevel.id} value={parseInt(waterLevel.id)}>{waterLevel.level}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                </div>
{/* 
                                <div className="kk">
                                    <Form.Group controlId="isDead">
                                        <Form.Label>Ready for the Plant Graveyeard:</Form.Label>
                                        <Form.Control as="select" className=""
                                            value={parseInt(plant.isDead)} id="isDead" required
                                            onChange={handleFieldChange}  >
                                            <option value= "true" >Ready</option>
                                             <option value= "false" >This Plant is Thriving, get outta here GrimPlantKeeper!</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div> */}  
 
                        </div>
                                <div className="alignRight">
                                    <button
                                        className="waves-effect waves-light btn"
                                        type="button"
                                        disabled={isLoading}
                                        onClick={updateExistingPlant}
                                    >Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlantEditForm;