// import React, { useState } from 'react';
// import {validateEmail } from '../../utils/helpers';

// function Contact() {
//     const [formState, setFormState] =useState({

//     });

//     const handleSubmit = (e) => {
       //use validateEmail
    // };

    // const handleChange = (e) => {
       
    // };

    // return {
        //set up form
        //examples in mondays activites
//     };
// }

// export default Contact;

import React from 'react';


function Contact(){
    return(
        <div className="content">
        <section className="about-me">
            <img id= "headshot" src={require("../../assets/images/karen.jpg")} alt="Karen Headshot"/>
            <h2>Contact</h2>
            <p className="body-text">
            <ul>
                    <li id="linkedin">
                        <a href= "https://www.linkedin.com/in/kmartinezguerrero/"> Visit my LinkedIn!</a> </li>
                    <li id="github">
                        <a href= "https://github.com/kmart134"> Visit my GitHub!!</a> </li>
                    <li>Email: ksmgps@hotmail.com</li>
                    <li>Phone Number: 321-287-8935</li>
                </ul>
            </p>
        </section>
        </div>
    );
}

export default Contact;