import React from 'react';

import './CheckBox.css';

const checkBox = props => {
    return(
        <label className="CheckBox">{props.children}
                <input type="checkbox" checked={props.selected? 'checked' : null} onChange={props.clicked} />
            <span className="checkmark"></span>
        </label>
    )
}

export default checkBox;