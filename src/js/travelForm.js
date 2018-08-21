
function renderAddTravelButton(){
    return `<button id="add-travel-form">Add a new travel</button>`
}

function renderTravelForm(userId){
    return `<div class="travel-form">
                <input type="text" placeholder="Name Your Trip" id="travel-title">
                <input type="text" placeholder="Where did you go?" id="travel-location">
                <input type="text" placeholder="When was the trip?" id="travel-date">
                <input type="text" placeholder="Put your image link here" id="travel-image">
                <textarea placeholder="Tell everyone about your trip!" id="travel-description"></textarea>
                <div class="button-container">
                    <button class="save-btn" id="add-travel">Add To Your Travelog</button>
                    <button class="back-btn">Go Back</button>
                </div>
            </div>`
}

function clearTravelForm(){
    document.querySelector("#travel-title").value = "";
    document.querySelector("#travel-location").value = "";
    document.querySelector("#travel-image").value = "";
    document.querySelector("#travel-date").value = "";
    document.querySelector("#travel-description").value = "";
}

module.exports = {renderAddTravelButton, renderTravelForm, clearTravelForm};