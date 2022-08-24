import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App () {
    const [pages] = useState([
        {name: 'about me'},
        {},
        {},
        {}
    ]);
//set up useState with currentPage and setCurrentPage, giving the default state to be whichever page you'd like the visitor to see first,

//example pages[0] - would show the about me page first

//set up return
return(
    //container
    //header componenet wrapping your nav componenet
    //nav- give the nav component some props - pages = {pages},
    //set CurrentPage = {setCurrentPage}, currentPage ={currentPage}
    //close the header

    //main tag wrapping your page componenet
    //page component with the prop of currentpage ={currentPage}
    //close main

    //footer component
    //close conatiner
)
}

export default App;