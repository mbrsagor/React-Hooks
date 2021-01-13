import React, { useState, useContext } from 'react';

import { ContactContext } from '../../context/contactContext';


const ContactTable = () => {
    const [state, dispatch] = useContext(ContactContext);
    const [selectedId, setSelectedId] = useState();

    // console.log(state);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {state.contacts.map(contact => (
                       <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                        </tr> 
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ContactTable;
