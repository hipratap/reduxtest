import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Cards from '../../components/Cards/Cards';

import './Layout.css'

const layout = () => {
    return(
        <div className="Layout">
            <Toolbar />
            <Cards />
        </div>
    )
}

export default layout;