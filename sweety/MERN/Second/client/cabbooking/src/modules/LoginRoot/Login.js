import React from "react";

export default function Login(){
    return(

        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src="src/asset/weather.jpg" alt="IMG" />
                    </div>

                    <form className="login100-form validate-form">
                        <span className="login100-form-title">Member Login</span>

                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input
                             className="input100"
                             type="text"
                             name="email"
                             placeholder="Email" 
                             />
                             <span className="focus-input100"></span>
                             <span className="symbol-input100"></span>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}