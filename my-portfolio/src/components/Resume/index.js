import React from 'react';
import coverImage from '../../assets/images/laptop.jpg';
import resume from '../../assets/images/Resume.png'
import '../../assets/Resume.css';


function Resume(){
    return(
        <div className="content">
        <section className="about-me">
            <img id= "resume" src={resume} alt="Karen resume"/>
            <h2>Resume</h2>
            <p className="body-text">
            Resume should be here
            </p>
        </section>
        </div>
    );
}

export default Resume;