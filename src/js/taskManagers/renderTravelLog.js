const dataManager = require("../dataManager");
const formManager = require("../travelForm");
const makeTravelCard = require("../travelCard");



function renderTravelLog(user){
    document.querySelector("#travel-card-container").innerHTML = "";
    document.querySelector("#travel-form-container").innerHTML = formManager.renderAddTravelButton();
    dataManager.getTravelLog(user.id).then((travels)=>{
        travels.forEach(travel => {
            document.querySelector("#travel-card-container").innerHTML += makeTravelCard(travel);
        });
    });
}

module.exports = renderTravelLog;