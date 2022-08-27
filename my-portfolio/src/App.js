import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
    const [pages] = useState([
        // {name: 'about me'},
        {name: 'portfolio'}
        // {name: 'contact'},
        // {name: 'resume'}
    ]);
    
//set up useState with currentPage and setCurrentPage, giving the default state to be whichever page you'd like the visitor to see first,
    const [currentPage, setCurrentPage] = useState(pages[0]);
//example pages[0] - would show the about me page first

return(
    <div >
    <Router>
    <Nav/>
    <Header />
    <Routes>
    <Route path='/Portfolio-React/about' element={<About/>} />
    <Route path='/Portfolio-React/contact' element={<Contact/>} />
    <Route path='/Portfolio-React/resume' element={<Resume/>} />
    <Route path='/Portfolio-React/portfolio' element={<Portfolio/>} />
    </Routes>
    <Footer />
    </Router>
</div>
);
}

export default App;