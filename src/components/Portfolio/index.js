//instructo provided
import React, { useState } from 'react';
import '../../assets/Portfolio.css';
import Project from "../Project";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Backyard Jungle',
            description: 'This growing website allows plant-lovers to add plants to their gardens (collections) and interact with other others based on their interests. This was a collaboration with other students in the UCF Full-Stack coding Bootcamp.',
            link: "https://dry-beach-49040.herokuapp.com/",
            repo: "https://github.com/Anastasia095/Backyard-Jungle"
        },
        {
            name: 'Mix-up-Movie-Night',
            description: 'This nifty application will quickly switch up boring date nights. The application will suggest a cocktail and movie at random to get you out of your boring movie night rut. This was a collaboration with other students in the UCF Full-Stack coding Bootcamp. ',
            link: "https://servbt.github.io/Mix-up-Movie-Night/",
            repo: "https://github.com/Servbt/Mix-up-Movie-Night"
        },
        {
            name: 'Looking for Coders',
            description: 'This application will be used by coders to connect with other coders based on skills, time available, and project requirements.',
            link: "https://quiet-coast-79925.herokuapp.com/",
            repo: "https://github.com/LorenzoFTSIC/LFCoders"
        },
       
    ]);
 return(
    <div>
        
    <div className= "port flex-row">
        {projects.map((project, idx) =>(
            <Project 
            project={project}
            key={"project" + idx}
            />
        ))}
        </div>
    </div>
 );
};

export default Portfolio;