
const dataManager = Object.create(null, {
    getUser: {
        value: (username, email) => {
            return fetch(`http://localhost:8088/users?email=${email}&username=${username}`)
            .then(res => res.json())
        }
    },
    saveUser: {
        value: (user) => {
            return fetch(`http://localhost:8088/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
        }
    },
    getTravelLog: {
        value: (userId) => {
            return fetch(`http://localhost:8088/users/${userId}/travels?_sort=id&_order=desc`)
            .then(res => res.json())
        }
    },
    saveTravel: {
        value: (object) => {
            return fetch(`http://localhost:8088/travels`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            }).then(res => res.json())
        }
    },
    removeTravel: {
        value: (objectId) => {
            return fetch(`http://localhost:8088/travels/${objectId}`, {
                method: "DELETE"
            }).then(res => res.json())
        }
    },
    editTravel: {
        value: (objectId, object) => {
            return fetch(`http://localhost:8088/travels/${objectId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            }).then(res => res.json())
        } 
    }
})

module.exports = dataManager;