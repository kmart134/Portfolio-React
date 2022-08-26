import React from 'react';
import '../../assets/About.css';
import '../../assets/images/karen.jpg'

function About(){
    return(
        <div className="content">
        <section className="about-me">
            <img id= "headshot" src="../../assets/images/karen.jpg" alt="Karen Headshot"/>
            <h2>About Me</h2>
            <p className="body-text">
            UCF Full Stack Developer Bootcamp graduate with a bachelors degree in Art from the University of Central Florida. Passionate about UX UI interface creation with a focus in making applications that provide users an effortless and intuitive experience that looks to engage the audience and invite them to come back. Well versed in CSS, JavaScript, mySQL, Express.js, Node.js and deployment. Looking to bring strengths from past careers such as problem-solving tactics, organization, training techniques, and strong communication skills. Excited to harness all past experience plus newfound skills to build better websites and products for the client.
            </p>
        </section>
        </div>
    );
}

export default About;