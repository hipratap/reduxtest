import React from 'react';

import './CheckList.css';
import Card from '../../UI/Card/Card';
import CheckBox from '../../UI/CheckBox/CheckBox';

const CheckList = (props) => {
    
        let persons = [];
        persons.push(Object.keys(props.list).map(loc => {
            let list=props.list[loc];
            let locationCount = 0;
            let listName = props.list[loc][0].location;
        
            return (
                <div className="PersonGroup" key={loc}>
                    
                    {list.map(person => {
                        locationCount++ ;
                        return(
                            <CheckBox
                            key={loc+person.id}
                            selected={person.selected}
                            clicked={() => {
                                props.changed(loc, person.id)
                                }}
                        >{person.name}</CheckBox>
                        )
                        
                    })}
                    {locationCount !== 0 ? <h2 key={listName}>{listName}</h2> : null }
                </div>
            )
        }))

        return (
           <Card keyId='checkLists'>
                {persons}
            </Card>
        )
    
}

export default CheckList;