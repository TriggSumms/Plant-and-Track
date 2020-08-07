import React, { useState, useEffect } from "react"
import PlantManager from "../../modules/PlantManager"
//import { Form } from 'react-bootstrap';
import './css-java-extension/materialize.css';
import './css-java-extension/materialize.min.css';



let timeStamp = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
    dateStyle: "short"
});


const PlantJournalEditForm = props => {
    const [journal, setJournal] = useState({ plantId: 0, id: 0, entryDate: timeStamp.format(Date.now()), journalEntry: "", journalTitle: "" });
    const [isLoading, setIsLoading] = useState(false);





    const handleFieldChange = evt => {
        const stateToChange = { ...journal };
        stateToChange[evt.target.id] = evt.target.value;
        setJournal(stateToChange);
    };


    const updateExistingJournal = evt => {
        //Stops the pg from loading on every click...
        evt.preventDefault()
        setIsLoading(true);

        //Created an easy tag to post to the return edit card.... for showing chats when they are edited     
        const MessageChanged = "(~Edited Since~)"

        // This is an edit, so we need the id
        const editedJournal = {
            userId: journal.userId,
            plantId: journal.plantId,
            id: props.match.params.journalId,
            entryDate: journal.EntryDate + MessageChanged,
            journalEntry: journal.journalEntry,
            journalTitle: journal.journalTitle
        };

        PlantManager.update(editedJournal)
            .then(() => props.history.push("/home"))
    }

    useEffect(() => {
        PlantManager.getJournal(props.match.params.journalId)
            .then(journal => {

                setJournal(journal);

                setIsLoading(false);

            });
    }, [props.match.params.journalId]);
    //Filling the dependency array allows the change made to rerender the Animal


    return (

        <>
            <div className="extraPaddingJournalEdit">
                <form className="col s12">
                    <div className="formgrid">
                        <input
                            type="hidden"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="userId"
                            value={journal.userId}
                        />


                        <div className="input-field col s5">
                            Title of the Entry:
                        <input placeholder="Give your Journal entry a memorable title..." id="journalTitle" type="text" data-length="10" required
                                onChange={handleFieldChange} className="validate" value={journal.journalTitle}></input>
                            <label for="journalEntry"></label>
                        </div>
                        <div className="input-field col s8">
                            Plant Journal Entry:
                        <input placeholder="Talk about the status of your plant, your plans for next season, repotting methods, etc:" id="journalEntry" className="materialize-textarea" required
                                onChange={handleFieldChange} className="validate" value={journal.journalEntry}></input>
                            <label for="journalEntry"></label>
                        </div>
                        <div className="alignRight">
                            <button
                                className="waves-effect waves-light btn"
                                type="button"
                                disabled={isLoading}
                                onClick={updateExistingJournal}
                            >Submit Changes</button>
                        </div></div>
                </form>

            </div>







        </>
    );
}

export default PlantJournalEditForm;