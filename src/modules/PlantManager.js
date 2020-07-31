

const remoteURL = "http://localhost:5005"

export default {
    get(id) {
        return fetch(`${remoteURL}/plants/${id}`).then(result => result.json())
    },
    getAll(str) {
        return fetch(`${remoteURL}/${str}`).then(result => result.json())
    },
    getWithDetails(){
        return fetch(`http://localhost:5005/plants/?_expand=mood&_expand=waterLevel&_expand=sunlightLevel`)
                .then(result => result.json())
            },
    delete(id) {
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
    // Grabbing the API info for my form dropdowns
/*     getAllMood() {
        return fetch(`${remoteURL}/moods`).then(result => result.json())
    },
    getAllSun() {
        return fetch(`${remoteURL}/sunlightLevels`).then(result => result.json())
    },
    getAllWater() {
        return fetch(`${remoteURL}/waterLevels`).then(result => result.json())
    } */
    
 }   