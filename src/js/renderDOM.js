

function renderDOM(){
    document.querySelector("#user-page").innerHTML = 
        `<header>
            <nav>
                <button id="logout-btn">Logout</button>
            </nav>
        </header>
        <main>
            <div class="left-container">
                <div id="profile-section"
            </div>
            <div class="mid-container">
                <div id="travel-log">
                    <div id="travel-form-container"></div>
                    <div id="travel-card-container"></div>
                </div>
            </div>
            <div class="right-container"></div>
        </main>
        <footer></footer>`
}

module.exports = renderDOM;