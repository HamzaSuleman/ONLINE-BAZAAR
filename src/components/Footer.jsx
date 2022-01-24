import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer.css';

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

const Footer = () => {

    var username = null;

    if (username == null)
        username = getCookie("User-Name");

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2 position-relative">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <h6 className="navbar fw-bold" id='login-name'
                                >Welcome {username}</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Footer
