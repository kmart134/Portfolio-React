import React, { useEffect } from 'react';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    return(
        //nav
        //map over pages to render the name of each page - activity 10 solved
        //have an onClick for each of these elements created by the map, that sets the 
        //current page equal to that page - using setCurrentPage that we get from App.js
        <ul className="list-group">
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {props.groceries.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
    );
}