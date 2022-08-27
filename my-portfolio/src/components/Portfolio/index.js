//instructo provided
import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Backyard-Jungle',
            description: 'This growing website allows plant-lovers to add plants to their gardens (collections) and interact with other others based on their interests. This was a collaboration with other students in the UCF Full-Stack coding Bootcamp.',
            link: "https://dry-beach-49040.herokuapp.com/",
            repo: "https://github.com/Anastasia095/Backyard-Jungle"
        },
        {
            name: 'Mix-up-Movie-Night',
            description: 'This nift application will quickly switch up boring datenights. The application will suggest a cocktail and movie at random to get you aout of your boring movie night rut. This was a collaboration with other students in the UCF Full-Stack coding Bootcamp. ',
            link: "https://servbt.github.io/Mix-up-Movie-Night/",
            repo: "https://github.com/Servbt/Mix-up-Movie-Night"
        },
        {
            name: 'Code-Quiz',
            description: 'Coding Quiz: Test your knowledge in the world of code. Watch out: every time you get a question wrong, time will be deducted!',
            link: "https://servbt.github.io/Mix-up-Movie-Night/",
            repo: "https://github.com/Servbt/Mix-up-Movie-Night"
        },
    ]);
 return(
    <div>
        Portfolio here
    <div className= "flex-row">
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