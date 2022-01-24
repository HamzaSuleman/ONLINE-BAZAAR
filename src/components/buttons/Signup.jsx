import React from 'react'

function setCookieValues(){ // set
	var checkBox = document.getElementById("check-box").checked
	var username = document.getElementById('UserName');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
	
    if (checkBox === true)
    {
        console.log(username+','+email+','+password)
	    document.cookie = "User-Name=" + username.value + ";expires=Thu, 18 Dec 2023 12:00:00 UTC;"+ 
        "path=localhost:3000";
        document.cookie = "Email=" + email.value + ";expires=Thu, 18 Dec 2023 12:00:00 UTC;"+ 
        "path=localhost:3000";
        document.cookie = "Password=" + password.value + ";expires=Thu, 18 Dec 2023 12:00:00 UTC;"+ 
        "path=localhost:3000";
        alert('Successfully Registered...')
    }

	document.getElementById('UserName').innerText = ''
    document.getElementById('email').innerText = ''
    document.getElementById('password').innerText = ''
}

const Signup = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        
                            <form>
                                <div className="mb-3">
                                    <label  htmlFor="exampleInput" className="form-label">Username</label>
                                    <input id='UserName' type="text" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Email address</label>
                                    <input id='email' type="email" className="form-control" aria-describedby="emailHelp" required/>
                                    <div className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label  htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input id='password' type="password" className="form-control" required/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="check-box" required/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">I Agree terms and conditions
                                     of ONLINE BAZAAR</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5" onClick={setCookieValues}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
