const dataManager = require("../dataManager");

function removeTravelHandler(e){
    let travelId = e.target.id.split("--")[1];
    dataManager.removeTravel(travelId)
    .then(() => {
        e.target.parentElement.parentElement.remove();
    })
}

module.exports = removeTravelHandler;