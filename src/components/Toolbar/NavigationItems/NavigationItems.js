import React from 'react';

import './NavigationItems.css';

const navigationItems = () => {
    return (
        <ul className="NavigationItems">
            <li>Home</li>
            <li>My Portfolio</li>
            <li>Clients</li>
            <li><a href="/">Get in Touch</a></li>
        </ul>
    )
}

export default navigationItems;