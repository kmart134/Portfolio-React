import React from 'react';
import PageContent from'../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
// import Resume from '../Resume';
import { capitalizeFirstLetter} from '../../utils/helper';

function Page({ currentPage}) {
    const renderPage = () =>{
        //conditional that returns the correct component based on our currentPage.name
        switch (currentPage.name){
            case "about me":
                return <About/>;
            case "portfolio":
                return <Portfolio/>;
            case "contact":
                return <Contact/>;
            // case "resume":
            //     return <Resume/>;
            default:
                return <About/>;

        }

        //switch case, if statement

        //currentPage.name is 'about me' - we wont return <About/> component

    };

    return(
        <section>
            <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
            <PageContent>{renderPage()}</PageContent>
        </section>
        //container or section
        
    )
}

export default Page