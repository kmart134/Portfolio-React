import React, { useEffect } from 'react';
import '../../assets/Navbar.css';
import { capitalizeFirstLetter } from '../../utils/helpers';


const styles = {
  navbarStyle: {
    background: 'pink',
    // justifyContent: 'flex-end',
  },
};

function Nav({props}) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
      document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return(
        <nav>
          <ul className="flex-row">
            {pages.map((Page) => (
              <li
                className={`mx-5 ${
                  currentPage.name === Page.name && 'navActive'
                  }`}
                key={Page.name}
              >
                <span
                  onClick={() => setCurrentPage(Page)}
                >
                  {capitalizeFirstLetter(Page.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
    );
  }




      // <li className="nav-item">
      // <a

      //     href="about-me"
      //     onClick={() => handlePageChange('About')}
      //     className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      //   >
      //     About Me
      //   </a>
      // </li>
      // <li className="nav-item">
      //   <a
      //     href="portfolio"
      //     onClick={() => handlePageChange('Portfolio')}
      //     className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
      //   >
      //     Portfolio
      //   </a>
      // </li>
      // <li className="nav-item">
      //   <a
      //     href="contact"
      //     onClick={() => handlePageChange('Contact')}
      //     className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      //   >
      //     Contact
      //   </a>
      // </li>
      // <li className="nav-item">
      //   <a
      //     href="resume"
      //     onClick={() => handlePageChange('Resume')}
      //     className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
      //   >
      //     Resume
      //   </a>
      // </li>
 


export default Nav;