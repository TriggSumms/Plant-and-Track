
const remoteURL = "http://localhost:5005"

export default {
    //Joint Fetch Call
    getAll(str) {
        return fetch(`${remoteURL}/${str}`).then(result => result.json())
    },

    //PLANT FETCH CALLS START
    getPlant(id) {
        return fetch(`${remoteURL}/plants/${id}`).then(result => result.json())
    },
    deletePlant(id) {
        return fetch(`${remoteURL}/plants/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newPlant) {
        return fetch(`${remoteURL}/plants`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlant)
        }).then(data => data.json())
    },
    update(editedPlant) {
        return fetch(`${remoteURL}/plants/${editedPlant.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedPlant)
        }).then(data => data.json());
    },
    //END PLANT FETCH

    //Fetch calls to bind tables

    getWithDetails() {
        return fetch(`http://localhost:5005/plants/?_expand=mood&_expand=waterLevel&_expand=sunlightLevel`)
            .then(result => result.json())
    },


    getWithSingleDetails(id) {
        return fetch(`http://localhost:5005/plants/${id}/?_expand=mood&_expand=waterLevel&_expand=sunlightLevel`)
            .then(result => result.json())
    },

    /*      getWithJournalDetails() {
             return fetch(`http://localhost:5005/journals/${id}`)
                .then(result => result.json())
         }, */

    getWithAllDetails(id) {
        return fetch(`http://localhost:5005/plants/${id}/?_expand=mood&_expand=waterLevel&_expand=sunlightLevel&_expand=journal`)
            .then(result => result.json())
    },

    getWithJournal() {
        return fetch(`http://localhost:5005/journals/?_expand=plant`)
            .then(result => result.json())
    },
    getWithSpecificPlants(id) {
        return fetch(`http://localhost:5005/journals/${id}/?_expand=plant`)
            .then(result => result.json())
    },

    
    getWithSpecificJournals(id) {
        return fetch(`http://localhost:5005/journals?plantId=${id}&_expand=plant`)
            .then(result => result.json())
    },


    //Journal Fetch CAlls:
    getJournal(id) {
        return fetch(`${remoteURL}/journals/${id}`).then(result => result.json())
    },
    deleteJournal(id) {
        return fetch(`${remoteURL}/journals/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },

    postJournal(newJournalEntry) {
        return fetch(`${remoteURL}/journals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        }).then(data => data.json())
    },
    update(editedJournal) {
        return fetch(`${remoteURL}/journals/${editedJournal.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedJournal)
        }).then(data => data.json());
    }
    //End Journal Fetch Calls









}   