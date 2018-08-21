
function renderLogin(){
    return `<div class="form-collection">
                <div class="card elevation-3 limit-width log-in-card below turned">
                    <div class="card-body">
                        <h2>Register</h2>
                        <div class="input-group username">
                            <input type="text" placeholder="Create a Username" id="register-username">
                        </div>
                        <div class="input-group email">
                            <input type="text" placeholder="Register Your Email" id="register-email">
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="signup-btn">Sign Up</button>
                    </div>
                </div>
                <div class="card elevation-2 limit-width sign-up-card above">
                    <div class="card-body">
                        <h2>Welcome to TraveLog</h2>
                        <div class="input-group username">
                            <input type="text" placeholder="Username" id="login-username">
                        </div>
                        <div class="input-group email">
                            <input type="email" placeholder="Email" id="login-email">
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="login-btn">Log in</button>
                    </div>
                </div>
            </div>`
}

module.exports = renderLogin;