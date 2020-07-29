import React, { useState } from 'react';
import PlantManager from '../../modules/PlantManager';
import './PlantForm.css'



//Method for Creating Time Stamp in readeable form(mdn docs)...
let timeStamp = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
    dateStyle: "short"
});

const PlantForm = props => {
  const [plant, setPlant] = useState({ userId : 0, id:"", nickName: "", vernacularName: "", entryDate: timeStamp.format(Date.now()), age: "", moodId: "", sunlightId: "", waterId: "", isDead: ""});
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
    if (plant.nickName === "" || plant.vernacularName === "" || plant.age === "")
    /* || plant.moodId === "" || plant.sunlightId === "" || plant.waterId === "" ||plant.isDead === "" */ {
      window.alert("Please fill out all the entry requirements....otherwise your plant wont survive the season!");
    } else {
      setIsLoading(true);
      // Create the article and redirect user to article list
      PlantManager.post(plant)
        .then(() => PlantManager.getAll())
        // props.history.push("/home"));
    }
  };
  

  return (
    <>
    <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="nickName"
              placeholder="What would you like to call your plant?"
            />
            <label htmlFor="nickName">Choose your plant NickName:</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="vernacularName"
              placeholder="What is the 'common' name of your plant?"
            />
            <label htmlFor="vernacularName">Enter in your plants English common name:</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="age"
              placeholder="At what growing stage or age is your plant?"
            />
            <label htmlFor="age">Plant Age:</label>
</div>

          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewPlant}
            >Submit</button>
          </div>
        </fieldset>
      </form>
  
    </>
  );
};

export default PlantForm;