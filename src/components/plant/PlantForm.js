import React, { useState } from 'react';
import PlantManager from '../../modules/PlantManager';
import './PlantForm.css'
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
    const [plant, setPlant] = useState({ userId: 0, id: "", nickName: "", vernacularName: "", entryDate: timeStamp.format(Date.now()), age: "", moodId: "", sunlightId: "", waterId: "", isDead: "" });
    const [isLoading, setIsLoading] = useState(false);

    //Tracks entries into text boxes
    const handleFieldChange = evt => {
        const stateToChange = { ...plant };
        stateToChange[evt.target.id] = evt.target.value;
        setPlant(stateToChange);
    };


    const currentUserId = sessionStorage.getItem("activeUser")
    plant.userId = parseInt(currentUserId)



    const constructNewPlant = evt => {
        evt.preventDefault();
        if (plant.nickName === "" || plant.vernacularName === "" || plant.age === "" )
    /* || plant.sunlightId === "" || plant.waterId === "" ||plant.isDead === "" */ {
            window.alert("Please fill out all the entry requirements....otherwise your plant wont survive the season!");
        } else {
            setIsLoading(true);
            // Create the article and redirect user to article list
            PlantManager.post(plant)
                .then(() => PlantManager.getAll())
            // props.history.push("/home"));
        }
    };
/*     var instance = M.FormSelect.getInstance(elem);
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, options);
      });
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


                                <div className="row">
            <div className="input-field col s12">Select your plants most recent mood:
                                    <select multiple  id="moodId" required
                                        onChange={handleFieldChange}  >
                                        <option value="" disabled selected>Choose the plants current Mood(s)!</option>
                                        <option value="Healthy as Hell" >Healthy as Hell</option>
                                        <option value="Doin alright" >Doin Alright</option>
                                        <option value="On its way to heaven" >On its way to heaven</option>
                                    </select>
                                    <label for="moodId"> </label>
                                </div>
                                </div>
                                <div class="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
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