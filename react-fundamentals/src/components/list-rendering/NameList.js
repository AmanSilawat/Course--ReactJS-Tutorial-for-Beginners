import React from 'react';
import Person from './Person';

function NameList() {
    const persons = [
        {
            name: 'Saleh',
            id: 3
        },
        {
            name: 'Sahil',
            id: 3
        },
        {
            name: 'Aman',
            id: 3
        },
    ]
    const nameList = persons.map(person => {
        console.log(person)
        return <Person person={person} />
    })
    return <div> {nameList} </div>
}

export default NameList;