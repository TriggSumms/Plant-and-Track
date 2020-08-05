import React, { useState, useEffect } from 'react';
import PlantManager from '../../modules/PlantManager';
//import './PlantForm.css'
import { Form } from 'react-bootstrap';
import './css-java-extension/materialize.css';
import './css-java-extension/materialize.min.css';
//import './css-java-extension/materialize.js';
//import './css-java-extension/materialize.min.js';






//Method for Creating Time Stamp in readeable form(mdn docs)...
let timeStamp = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
    dateStyle: "short"
});

const PlantForm = props => {
    const [plant, setPlant] = useState({ userId: 0, id: 0, nickName: "", vernacularName: "", entryDate: timeStamp.format(Date.now()), age: "", moodId: 0, sunlightLevelId: 0, waterLevelId: 0, isDead: false });
    const [moods, setMoods] = useState([]);
    const [sunlightLevels, setSunlightLevels] = useState([]);
    const [waterLevels, setWaterLevels] = useState([]);
    //const [isDeads, setisDeads] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //Tracks entries into text boxes
    const handleFieldChange = evt => {
        const stateToChange = { ...plant };
        stateToChange[evt.target.id] = evt.target.value;
        setPlant(stateToChange);
    };


    
    //DROPDOWN API CALLS



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


    //END DROPDOWN CALLS


    useEffect(() => {
        getMoods();
        getSunlightLevels();
        getWaterLevels();
        //getIsDeads()
    }, []);




    const currentUserId = sessionStorage.getItem("activeUser")
    plant.userId = parseInt(currentUserId)



    const constructNewPlant = evt => {
        evt.preventDefault();
        if (plant.nickName === "" || plant.vernacularName === "" || plant.age === "")
    /* || plant.sunlightId === "" || plant.waterId === "" ||plant.isDead === "" */ {
            window.alert("Please fill out all the entry requirements....otherwise your plant won't survive the season!");
        } else {
            setIsLoading(true);
            // Create the article and redirect user to article list
            PlantManager.post(plant)
                //.then(() => PlantManager.getAll(plants))
                .then(() => props.history.push("/home"));
        }
    };



    return (
        <>
            <div className="row">
                <div className="col s12 m5">
                    <div className="card-panel transparent">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        Vernacular Name:
            <input placeholder="Enter in your plants English common name:" id="vernacularName" type="text" required
                                            onChange={handleFieldChange} className="validate"></input>
                                        <label for="vernacularName"></label>
                                    </div>
                                    <div className="input-field col s6">
                                        Plants NickName:
          <input placeholder="What would you like to call your plant?" id="nickName" type="text" required
                                            onChange={handleFieldChange} class="validate"   ></input>
                                        <label for="nickName"></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        What is the Age of your plant:
          <div className="input-field inline">
                                            <input placeholder="How many days...old?" id="age" type="text" required
                                                onChange={handleFieldChange} className="validate"></input>
                                            <label for="age"></label>
                                        </div>
                                    </div>
                                </div>



                                <div className="">
                                    <Form.Group className="" controlId="moodId">
                                        <Form.Label>Plant Mood:</Form.Label>
                                        {/* name="selectMulti" id="" multiple> */}
                                        <Form.Control as="select" className="moodForm"
                                            value={parseInt(plant.moodId)} id="moodId" required
                                            onChange={handleFieldChange}  >
                                            {moods.map(mood =>
                                                <option key={mood.id} value={mood.id}>{mood.level}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="">
                                    <Form.Group className="" controlId="sunlightLevelId">
                                        <Form.Label>Sunlight Level:</Form.Label>
                                        <Form.Control as="select" className="sunlightLevelForm"
                                            value={parseInt(plant.sunlightLevelId)} id="sunlightLevelId" required
                                            onChange={handleFieldChange}  >
                                            {sunlightLevels.map(sunlightLevel =>
                                                <option key={sunlightLevel.id} value={sunlightLevel.id}>{sunlightLevel.level}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="">
                                    <Form.Group className="" controlId="waterLevelId">
                                        <Form.Label>Water Level:</Form.Label>
                                        <Form.Control as="select" className="waterLevelForm"
                                            value={parseInt(plant.waterLevelId)} id="waterLevelId" required
                                            onChange={handleFieldChange}  >
                                            {waterLevels.map(waterLevel =>
                                                <option key={waterLevel.id} value={waterLevel.id}>{waterLevel.level}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                </div>

  


                                <div className="alignRight">
                                    <button
                                        className="waves-effect waves-light btn"
                                        type="button"
                                        disabled={isLoading}
                                        onClick={constructNewPlant}
                                    >Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlantForm;