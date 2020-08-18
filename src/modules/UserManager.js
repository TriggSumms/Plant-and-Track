const remoteURL = "http://localhost:5005"


export default {
    getUser(id) {
        return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
    },
	getAllUsers() {
		return fetch(`${remoteURL}/users`).then(result => result.json())
	},
	updateSpecificUser(editedUser) {
        return fetch(`${remoteURL}/users/${editedUser.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedUser)
        }).then(data => data.json());
    },
    createUser(newUser) {
		return fetch(`${remoteURL}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newUser)
        })
    },
    
    getTheCount(id) {
		return fetch(`${remoteURL}/plants/?userId=${id}&_expand=user`).then(result => result.json())
	}

};
