//instructo provided
import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Backyard-Jungle',
            description: 'collab',
            link: "hhtps:///github.com",
            repo: "hhtps:///github.com"
        },
        {

        },
    ]);
 return(
    <div>
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