const dataManager = require("../dataManager");

function signupHandler(){
    let username = document.querySelector("#register-username").value;
    let email = document.querySelector("#register-email").value;
    if(username === "" && email === ""){
        document.querySelector("#login-username").value = "";
        document.querySelector("#login-email").value = "";
    } else if(username === "" || email === ""){
        alert("Please fill everything out");
    } else {
        dataManager.getUser(username, email).then(user => {
            if(user.length){
                alert("This username is already taken");
            } else {
                let user = {
                    username: username,
                    email: email,
                    about: {
                        birthday: "Add your Birthday to your Profile",
                        bio: "Tell everyone about yourself",
                        image: ""
                    }
                }
                dataManager.saveUser(user)
                .then((user) => {
                    document.querySelector("#register-username").value = "";
                    document.querySelector("#register-email").value = "";
                    alert("Congradulations! You are successfully registered!");
                })
            }
        })     
    }
}

module.exports = signupHandler;