const remoteURL = "http://localhost:5005"


export default {
    getAllImages(str) {
        return fetch(`${remoteURL}/${str}`).then(result => result.json())
    },
    getImage(id) {
        return fetch(`${remoteURL}/images/${id}`).then(result => result.json())
    },
    deleteImage(id) {
        return fetch(`${remoteURL}/images/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newImage) {
        return fetch(`${remoteURL}/images`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newImage)
        }).then(data => data.json())
    },

    getWithSpecificImages(id) {
        return fetch(`http://localhost:5005/images?plantId=${id}&_expand=plant`)
            .then(result => result.json())
    },
}