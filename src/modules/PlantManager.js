

const remoteURL = "http://localhost:5005"

export default {
    get(id) {
        return fetch(`${remoteURL}/plants/${id}`).then(result => result.json())
    },

    getAll(str) {
        return fetch(`${remoteURL}/${str}`).then(result => result.json())
    },
    getWithDetails() {
        return fetch(`http://localhost:5005/plants/?_expand=mood&_expand=waterLevel&_expand=sunlightLevel`)
            .then(result => result.json())
    },


    getWithSingleDetails(id) {
        return fetch(`http://localhost:5005/plants/${id}/?_expand=mood&_expand=waterLevel&_expand=sunlightLevel`)
            .then(result => result.json())
    },



    
    // getWithJournalDetails() {
    //     return fetch(`http://localhost:5005/plants/${id}/?_expand=mood&_expand=waterLevel&_expand=sunlightLevel`)
    //         .then(result => result.json())
    // },



    delete(id) {
        return fetch(`${remoteURL}/plants/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    deleteJournal(id) {
        return fetch(`${remoteURL}/journals/${id}`, {
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
    postJournal(newJournalEntry) {
        return fetch(`${remoteURL}/journals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
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


}   