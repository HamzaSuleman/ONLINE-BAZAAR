import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            We are a team of professional Web-Application Developers graduating from Sir Syed University of Engineering and technology in year 2023.
                            With the joint collaboration of the team members wich include Hamza Suleman, Furqan Farooqui, Hussain Shafi and Muhammad Talha, we were able to design and develop this awesome Web-Application.
                            This E-commerce Web-App is to demonstrate our skills and show our profeciency in Web Development using React Framework and Redux.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
