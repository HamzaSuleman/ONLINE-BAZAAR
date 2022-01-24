import React from 'react'

const LoginButtonClick = () =>
{
    var email = getCookie("Email");
    var password = getCookie("Password");

    if( document.getElementById("Email").value != email &&
    document.getElementById("Password").value != password)
    {
        alert('Invalid Email or Password..')
    }

    if(document.getElementById("Email").value === email &&
    document.getElementById("Password").value === password )
    {
        alert('Successfully Logged In...')
    }
}

function getCookieValues()
{
    console.log(document.cookie);

    var email = getCookie("Email");
    var password = getCookie("Password");

    document.getElementById("Email").value = email;
    document.getElementById("Password").value = password;

    alert('Cookies Set Sucessfully...')
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}


const Login = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-dark ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
               <span className="fa fa-sign-in me-1"></span> Login
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" required/>
                                        <div id="emailHelp" className="form-text">We'll never share your data with anyone.</div>
  </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="Password" required/>
  </div>
                                        <div className="mb-3 form-check">
  </div>
                                            <button type="button" onClick={getCookieValues} className="btn btn-outline-success w-100 mt-5">Set Cookies</button>
                                            <button type="submit" className="btn btn-outline-primary w-100 mt-5" onClick={LoginButtonClick}> Login </button>
</form>
                                    </div>
                                </div>
                </div>
                        </div>
        </>
                    )
}

                    export default Login
                    
