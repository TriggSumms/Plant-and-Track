import React, { useState, useEffect } from 'react';
import PlantManager from '../../modules/PlantManager';
//import './PlantForm.css'
//import { Form } from 'react-bootstrap';
import './css-java-extension/materialize.css';
import './css-java-extension/materialize.min.css';
//import './css-java-extension/materialize.js';
//import './css-java-extension/materialize.min.js';






//Method for Creating Time Stamp in readeable form(mdn docs)...
let timeStamp = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
    dateStyle: "short"
});

const PlantJournalForm = props => {
    const [journal, setJournal] = useState({ plantId: 0, id: 0, nickName: "", entryDate: timeStamp.format(Date.now()), journalEntry: ""});

    const [isLoading, setIsLoading] = useState(false);

    //Tracks entries into text boxes
    const handleFieldChange = evt => {
        const stateToChange = { ...journal };
        stateToChange[evt.target.id] = evt.target.value;
        setJournal(stateToChange);
    };


    useEffect(() => {

    }, []);




    const currentUserId = sessionStorage.getItem("activeUser")
    journal.userId = parseInt(currentUserId)
//plantId?


    const constructNewJournalEntry = evt => {
        evt.preventDefault();
        if (journal.journalEntry === "" ) {
            window.alert("Please fill out all the entry requirements....");
        } else {
            setIsLoading(true);
            // Create the article and redirect user to article list
            PlantManager.postJournal(journal)
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
                                        Plant Journal Entry:
                <input placeholder="Talk about the status of your plant, your plans for next season, repotting methods, etc:" id="journalEntry" type="text" required
                                            onChange={handleFieldChange} className="validate"></input>
                                        <label for="journalEntry"></label>
                                    </div>

                                <div className="alignRight">
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