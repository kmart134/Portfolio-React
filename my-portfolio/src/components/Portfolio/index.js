//instructo provided
import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Backyard-Jungle',
            description: 'collab',
            link: "https://dry-beach-49040.herokuapp.com/",
            repo: "https://github.com/Anastasia095/Backyard-Jungle"
        },
        {
            name: 'Mix-up-Movie-Night',
            description: 'collab',
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