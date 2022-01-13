import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [{
        id: 1,
        name: 'abc',
        age: 30,
        skill: 'react'
    },
    {
        id: 2,
        name: 'def',
        age: 25,
        skill: 'angular'
    },
    {
        id: 3,
        name: 'geh',
        age: 20,
        skill: 'sql'
    }
]
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>
    )
    return (
        <div>{personList}</div>
    )
}

export default NameList