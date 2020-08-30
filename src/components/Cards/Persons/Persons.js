import React from 'react';

import './Persons.css';
import Card from '../../UI/Card/Card';
import Person from '../../UI/Person/Person';

const Persons = (props) => {
    
    let selectedList = [];
    selectedList.push(Object.keys(props.list).map(loc => {
        let list=props.list[loc];
        let listName = props.list[loc][0].location;
        let selectedCount = 0;
        return (
            <div className="PersonGroup">
                {list.map(person => {
                    let p ='';
                    
                    if(person.selected){
                        selectedCount++ ;
                        p = <Person
                            key={person.id}
                            clicked={() => {
                                props.changed(loc, person.id)
                            }}
                        >{person.name}</Person>;
                        
                    }
                    return p;                        
                })}
                {selectedCount !== 0 ? <h2 key={listName}>{listName}</h2> : null }
            </div>
        )
        
    }))

    selectedList = props.count <= 0 ? <div className='Empty'>No items selected</div> : selectedList;

    return (
        <Card keyId='displayLists'>
            {selectedList}
        </Card>
    )
    
}

export default Persons;