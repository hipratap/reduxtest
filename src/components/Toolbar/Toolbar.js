import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

import './Toolbar.css'

const toolbar = () => {
    return(
        <div className="Toolbar">
            <div className="container">
                <Logo />
                <NavigationItems />
            </div>
        </div>
        
    )
}

export default toolbar;