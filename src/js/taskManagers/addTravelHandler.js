const getDate = require("../getDate");
const dataManager = require("../dataManager");
const formManager = require("../travelForm");
const renderTravelLog = require("./renderTravelLog");

function addTravelHandler(user){
    let newTravel = {
        userId: user.id,
        title: document.querySelector("#travel-title").value,
        location: document.querySelector("#travel-location").value,
        mainImage: document.querySelector("#travel-image").value,
        travelDate: document.querySelector("#travel-date").value,
        description: document.querySelector("#travel-description").value,
        date: getDate()
    }
    dataManager.saveTravel(newTravel).then(() => {
        document.querySelector("#travel-form-container").innerHTML = formManager.renderAddTravelButton();
        renderTravelLog(user);
    })
}

module.exports = addTravelHandler;