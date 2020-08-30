import React from 'react';

import './Card.css';

const card = props => (
    <div className="Card" key={props.keyId}>
        {props.children}
    </div>
);

export default card;