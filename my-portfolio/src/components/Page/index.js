import React from 'react';
import PageContent from'../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
// import Footer from '../Footer';
// import Resume from '../Resume';
// import Nav from "../Nav";
import { capitalizeFirstLetter} from '../../utils/helpers';

// export default function Page()  {

    // const [currentPage, setCurrentPage] = useState('About');
    function Page({currentPage}) {
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

        //currentPage.name is 'about me' - we wont return <About/> component  
    };

    // const handlePageChange = (page) => setCurrentPage(page);

    return(
        <section>
            <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
            <PageContent>{renderPage()}</PageContent>
        </section>

        //container or section
    );
}

export default Page