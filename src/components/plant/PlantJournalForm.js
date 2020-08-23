import React, { useState, useEffect } from 'react';
import PlantManager from '../../modules/PlantManager';



//Method for Creating Time Stamp in readeable form(mdn docs)...
let timeStamp = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
    dateStyle: "short"
});

const PlantJournalForm = props => {
    const [journal, setJournal] = useState({ plantId: props.plantId, entryDate: timeStamp.format(Date.now()), journalEntry: "", journalTitle: "" });
    const [plants, setPlants] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    //Tracks entries into text boxes
    const handleFieldChange = evt => {
        const stateToChange = { ...journal };
        stateToChange[evt.target.id] = evt.target.value;
        setJournal(stateToChange);
    };




    const currentUserId = sessionStorage.getItem("activeUser")
    journal.userId = parseInt(currentUserId)




    const constructNewJournalEntry = evt => {
        evt.preventDefault();
        if (journal.journalEntry === "" || journal.journalTitle === "") {
            window.alert("Please fill out all the entry requirements....");
        } else {
            setIsLoading(true);
            journal.plantId = parseInt(journal.plantId)
            PlantManager.postJournal(journal)
                //.then(() => PlantManager.getAll(plants))
                .then(() => props.history.push("/home"));
        }
    };


    const getPlants = () => {
        return PlantManager.getAll("plants").then(plantsFromAPI => {
            setPlants(plantsFromAPI)
        });
    }

    useEffect(() => {
        getPlants()
    }, []);





    return (
        <>

            <div className="row">
                <div className="col s12 m5">
                    <div className="card-panel transparent">
                        <div className="row">
                            <form className="col s12">
                                <input
                                    type="hidden"
                                    required
                                    className="form-control"
                                    onChange={handleFieldChange}
                                    id='plantId'
                                    value={plants.plantId}
                                />

                                <div className="input-field col s5">
                                    Title of the Entry:
                <input placeholder="Give your Journal entry a memorable title..." id="journalTitle" type="text" data-length="10" required
                                        onChange={handleFieldChange} className="validate"></input>
                                    <label for="journalTitleform"></label>
                                </div>
                                <div className="input-field col s8">
                                    Plant Journal Entry:
                <input placeholder="Talk about the status of your plant, your plans for next season, repotting methods, etc:" id="journalEntry" className="materialize-textarea" required
                                        onChange={handleFieldChange} className="validate"></input>
                                    <label for="journalEntryform"></label>
                                    <div >
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