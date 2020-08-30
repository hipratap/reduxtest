import React from 'react';

import './Person.css';

const person = props => {
    return(
        <div className="Person" onClick={props.clicked}>
            {props.children}
        </div>
    )
}

export default person;