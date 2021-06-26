import React from 'react'

function Person({ person }) {
    const { id, first_name, last_name, email, gender } = person;
    return (
        <tr>
            <td>{id}</td>
            <td>{first_name + last_name}</td>
            <td>{email}</td>
            <td>{gender}</td>
        </tr>
    )
}

export default Person
