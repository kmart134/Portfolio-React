import React from 'react';
import coverImage from '../../assets/images/laptop.jpg';
import '../../assets/Resume.css';

function Resume(){
    return(
        <div className="content">
        <section className="about-me">
            <img id= "headshot" src="../../assets/images/karen.jpg" alt="Karen Headshot"/>
            <h2>Resume</h2>
            <p className="body-text">
            Resume should be here
            </p>
        </section>
        </div>
    );
}

export default Resume;