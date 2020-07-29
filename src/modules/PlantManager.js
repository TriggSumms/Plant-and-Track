

const remoteURL = "http://localhost:5005"

export default {
    get(id) {
        return fetch(`${remoteURL}/plants/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/plants`).then(result => result.json())
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
    }
}