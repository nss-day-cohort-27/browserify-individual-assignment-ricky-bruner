
function makeTravelCard(object){
    return `<div class="travel-card" id="travel-card--${object.id}">
                <img src="${object.mainImage}" alt="${object.location}" id="travel-image--${object.id}">
                <h2 id="travel-title--${object.id}">${object.title}</h2>
                <h3 id="travel-location--${object.id}">${object.location}</h3>
                <h3 id="travel-time--${object.id}">${object.travelDate}</h3>
                <p id="travel-description--${object.id}">${object.description}</p>
                <h5 id="post-date--${object.id}">${object.date}</h5>
                <div class="button-container">
                    <button class="edit-btn" id="edit-btn--${object.id}">Edit</button>
                    <button class="delete-btn" id="delete-btn--${object.id}">Remove</button>
                </div>
            </div>`
}

module.exports = makeTravelCard;