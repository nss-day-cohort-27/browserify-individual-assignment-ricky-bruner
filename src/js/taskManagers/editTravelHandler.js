const dataManager = require("../dataManager");
const editManager = require("../editManager");
const renderTravelLog = require("./renderTravelLog");

function editTravelHandler(e, user){
    let travelId = e.target.id.split("--")[1];
    let editedTravel = editManager.saveEditedTravel(user);
    dataManager.editTravel(travelId, editedTravel)
    .then(() => {
        renderTravelLog(user);
    });
}

module.exports = editTravelHandler;