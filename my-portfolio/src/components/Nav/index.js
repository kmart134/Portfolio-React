import React, { useEffect } from 'react';
import '../../assets/Navbar.css';
import { Link } from 'react-router-dom';


const styles = {
  navbarStyle: {
    background: 'pink',
    justifyContent: 'flex-end',
  },
};

function Nav({currentPage, handlePageChange}) {
    // const {
    //     pages = [],
    //     setCurrentPage,
    //     currentPage,
    // } = props;

    return(
        //nav
        <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Welcome</a>
    
        <ul className="nav nav-tabs">
        <li className='nav-item'>
        <Link to='/Portfolio-React/about'
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-active nav-link' : 'nav-link'}>
        About
        </Link>
        </li>

        <li className='nav-item'>
        <Link to='/Portfolio-React/contact'
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-active nav-link' : 'nav-link'}>
        Contact
        </Link>
        </li>

        <li className='nav-item'>
        <Link to='/Portfolio-React/resume'
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-active nav-link' : 'nav-link'}>
        Resume
        </Link>
        </li>

        <li className='nav-item'>
        <Link to='/Portfolio-React/portfolio'
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-active nav-link' : 'nav-link'}>
        Portfolio
        </Link>
        </li>
    </ul>
    </nav>
    );
}

export default Nav;