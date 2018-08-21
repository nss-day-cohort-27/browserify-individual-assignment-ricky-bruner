let getDate = require("./getDate");

function saveEditedTravel(user){
    let editedTravel = {
        userId: user.id,
        title: document.querySelector("#edited-title").value,
        location: document.querySelector("#edited-location").value,
        mainImage: document.querySelector("#edited-image").value,
        travelDate: document.querySelector("#edited-travelDate").value,
        description: document.querySelector("#edited-description").value,
        date: `edited on: ${getDate()}`
    }
    return editedTravel
}

function transformCard(e){
    let travelCard = e.target.parentElement.parentElement;
    let image = document.querySelector(`#travel-image--${e.target.id.split("--")[1]}`).getAttribute("src");
    let title = document.querySelector(`#travel-title--${e.target.id.split("--")[1]}`).textContent;
    let location = document.querySelector(`#travel-location--${e.target.id.split("--")[1]}`).textContent;
    let travelDate = document.querySelector(`#travel-time--${e.target.id.split("--")[1]}`).textContent;
    let description = document.querySelector(`#travel-description--${e.target.id.split("--")[1]}`).textContent;
    console.log(image, title, location, travelDate, description);
    travelCard.innerHTML = 
        `<input id="edited-title" value="${title}">
        <input id="edited-location" value="${location}">
        <input id="edited-travelDate" value="${travelDate}">
        <textarea id="edited-description">${description}</textarea>
        <input id="edited-image" value="${image}">
        <div class="button-container">
            <button class="save-btn" id="save-btn--${e.target.id.split("--")[1]}">Save</button>
            <button class="back-btn" id="back-btn--${e.target.id.split("--")[1]}">Back</button>
        </div>`
}

module.exports = {transformCard, saveEditedTravel};