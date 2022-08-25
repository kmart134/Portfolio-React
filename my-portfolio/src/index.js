import React from 'react';
import reactDom from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals?

reactDom.render(
    <React.strictMode>
        <App/>
    </React.strictMode>,
    document.getElementById('root')
);