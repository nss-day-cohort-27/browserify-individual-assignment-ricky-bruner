/* DataBase Functions */
const dataManager = require("./dataManager");

/* Login Functions */
const renderLogin = require("./login/loginForm");
const loginFunctionality = require("./login/loginFunctions");

/* DOM Manipulation Functions */
const renderDOM = require("./renderDOM");
const formManager = require("./travelForm");
const editManager = require("./editManager");

/* Task Managing Functions */
const renderTravelLog = require("./taskManagers/renderTravelLog");
const signupHandler = require("./taskManagers/signupHandler");
const addTravelHandler = require("./taskManagers/addTravelHandler");
const removeTravelHandler = require("./taskManagers/removeTravelHandler");
const editTravelHandler = require("./taskManagers/editTravelHandler");



if(sessionStorage.getItem("user") === null){
    document.querySelector("#login-container").innerHTML = renderLogin();
    loginFunctionality();
} else {
    let user = JSON.parse(sessionStorage.getItem("user"));
    renderDOM();
    renderTravelLog(user);
}

document.querySelector("#wrapper").addEventListener("click", (e) => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    if(e.target.className === "signup-btn"){
        signupHandler();
    }
    if(e.target.className === "login-btn"){
        let username = document.querySelector("#login-username").value
        let email = document.querySelector("#login-email").value
        if(username === "" && email === ""){
            document.querySelector("#register-username").value = "";
            document.querySelector("#register-email").value = "";
        } else if(username === "" || email === ""){
            alert("Please fill everything out");
        } else {
            dataManager.getUser(username, email)
            .then((result) => {
                if(result.length){
                    let user = result[0];
                    sessionStorage.setItem("user", JSON.stringify(user));
                    document.querySelector("#login-container").innerHTML = "";
                    renderDOM();
                    renderTravelLog(user);
                } else {
                    alert("No Account found. Please double check your information");
                }
            })
        }
    }
    // let user = JSON.parse(sessionStorage.getItem("user"));
    if(e.target.id === "add-travel-form"){
        document.querySelector("#travel-form-container").innerHTML = formManager.renderTravelForm();
    }
    if(e.target.id === "add-travel"){
        addTravelHandler(user);
    }
    if(e.target.id.includes("delete-btn")){
        removeTravelHandler(e);
    }
    if(e.target.id.includes("edit-btn")){
        editManager.transformCard(e)
    }
    if(e.target.id.includes("save-btn")){
        editTravelHandler(e, user);
    }
    if(e.target.id === "logout-btn"){
        sessionStorage.clear();
        document.querySelector("#user-page").innerHTML = "";
        document.querySelector("#login-container").innerHTML = renderLogin();
        loginFunctionality();
    }
});

