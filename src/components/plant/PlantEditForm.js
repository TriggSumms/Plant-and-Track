import React, { useState, useEffect } from "react"
import PlantManager from "../../modules/PlantManager"


const PlantEditForm = props => {
    const [plant, setPlant] = useState({ nickName: "", vernacularName: "", age: "", /* moodId: 0, sunlightLevelId: 0, waterLevelId: 0, isDead: true  */ });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...plant };
        stateToChange[evt.target.id] = evt.target.value;
        setPlant(stateToChange);
    };

    const updateExistingPlant = evt => {
        //Stops the pg from loading on every click...
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedPlant = {
            id: props.match.params.plantId,
            nickName: plant.nickName,
            vernacularName: plant.vernacularName,
            age: plant.age,
            /*  moodId: 0,
             sunlightLevelId: 0,
             waterLevelId: 0,
             isDead: true */

        };

        PlantManager.update(editedPlant)
            .then(() => props.history.push("/home"))
    }
    /*     //Edited this process to pull and tie Employees with Animals...and a select drop down
        useEffect(() => {
            Manager.getAnimal(props.match.params.animalId)
                .then(animal => {
                    Manager.getEmployeeAll().then(employees => {
                        setEmployees(employees)
                        setAnimal(animal);
                        setIsLoading(false);
                    })
    
    
                });
        }, [props.match.params.animalId]);
        //Filling the dependency array allows the change made to rerender the Animal
     */

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
                                {/* 


                                <div className="">
                                    <Form.Group className="" controlId="moodId">
                                        <Form.Label>Plant Mood:</Form.Label>
                                       
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

                                <div className="">
                                    <Form.Group className="" controlId="isDead">
                                        <Form.Label>Ready for the Plant Graveyeard:</Form.Label>
                                        <Form.Control as="select" className=""
                                            value={parseInt(plant.isDead)} id="isDead" required
                                            onChange={handleFieldChange}  >
                                            <option value= "true" >Ready</option>
                                             <option value= "false" >This Plant is Thriving, get outta here GrimPlantKeeper!</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
 */}

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