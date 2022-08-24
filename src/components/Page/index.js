import React from 'react';
import PageContent from'../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Page({ currentPage}) {
    const renderPage = () =>{
        //conditional that returns the correct component based on our current name

        //switch case, if statement

        //currentPage.name is 'about me' - we wont return <About/> component

    };

    return(
        //container or section
        //<PageContent>{renderPage()}</PageContent>
    )
}

export default Page