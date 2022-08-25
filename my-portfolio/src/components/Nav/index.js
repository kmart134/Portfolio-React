import React, { useEffect } from 'react';

function Nav({currentPage, handlePageChange}) {
    // const {
    //     pages = [],
    //     setCurrentPage,
    //     currentPage,
    // } = props;

    return(
        //nav
        <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="about-me"
          onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
        //map over pages to render the name of each page - activity 10 solved
        //have an onClick for each of these elements created by the map, that sets the 
        //current page equal to that page - using setCurrentPage that we get from App.js
    //     <ul className="list-group">
    //   {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
    //   {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
    //   {props.groceries.map(item => (
    //     <li className="list-group-item" key={item.id}>
    //       {item.name}
    //     </li>
    //   ))}
    // </ul>
    );
}

export default Nav;