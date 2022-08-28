import React from 'react';
import resume from '../../assets/images/Resume.png'
import '../../assets/Resume.css';


function Resume(){
    return(
        <div>
        <section className="resumebox">
            <h2>Resume</h2>
            <img id= "resume" src={resume} alt="Karen resume"/>
            <p className="body-text">
            </p>
        </section>
        </div>
    );
}

export default Resume;