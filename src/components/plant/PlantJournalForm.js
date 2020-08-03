import React, { useState, useEffect } from 'react';
import PlantManager from '../../modules/PlantManager';
//import './PlantForm.css'
//import { Form } from 'react-bootstrap';
//import './css-java-extension/materialize.css';
//import './css-java-extension/materialize.min.css';
//import './css-java-extension/materialize.js';
//import './css-java-extension/materialize.min.js';






//Method for Creating Time Stamp in readeable form(mdn docs)...
let timeStamp = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
    dateStyle: "short"
});

const PlantJournalForm = props => {
    const [journal, setJournal] = useState({  id: 0, plantId: 0, entryDate: timeStamp.format(Date.now()), journalEntry: "", journalTitle: "" });

    const [isLoading, setIsLoading] = useState(false);

    //Tracks entries into text boxes
    const handleFieldChange = evt => {
        const stateToChange = { ...journal };
        stateToChange[evt.target.id] = evt.target.value;
        setJournal(stateToChange);
    };

    //const plantId = {plantId: props.match.params.plant.id}






    const currentUserId = sessionStorage.getItem("activeUser")
    journal.userId = parseInt(currentUserId)
    journal.plantId = parseInt(props.plant)


    const constructNewJournalEntry = evt => {
        evt.preventDefault();
        if (journal.journalEntry === "" || journal.JournalTitle === "") {
            window.alert("Please fill out all the entry requirements....");
        } else {
            setIsLoading(true);
            // Create the article and redirect user to article list
            PlantManager.postJournal(journal)
                //.then(() => PlantManager.getAll(plants))
                .then(() => props.history.push("/home"));
        }
    };

    useEffect(() => {

    }, []);


    return (
        <>

            <div className="row">
                <div className="col s12 m5">
                    <div className="card-panel transparent">
                        <div className="row">
                            <form className="col s12">

                                <div className="input-field col s5">
                                    Title of the Entry:
                <input placeholder="Give your Journal entry a memorable title..." id="journalTitle" type="text" data-length="10" required
                                        onChange={handleFieldChange} className="validate"></input>
                                    <label for="journalEntry"></label>
                                </div>
                                <div className="input-field col s8">
                                    Plant Journal Entry:
                <input placeholder="Talk about the status of your plant, your plans for next season, repotting methods, etc:" id="journalEntry" className="materialize-textarea" required
                                        onChange={handleFieldChange} className="validate"></input>
                                    <label for="journalEntry"></label>
                                    <div className="">
                                        <button
                                            className="waves-effect waves-light btn"
                                            type="button"
                                            disabled={isLoading}
                                            onClick={constructNewJournalEntry}
                                        >Submit</button>
                                    </div>
                                </div>


                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlantJournalForm;