import React, {useContext } from 'react';

import { ContactContext } from '../../context/contactContext';


const ContactTable = () => {
    const [state, dispatch] = useContext(ContactContext);

    // console.log(state);

    const delContact = id => {
        dispatch({
            type: "DEL_CONTACT",
            payload: id
        })
    };

    return (
        <>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.contacts.map(contact => (
                       <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>
                                <button
                                    onClick={() => delContact(contact.id)}
                                    className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                            </td>
                        </tr> 
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ContactTable;
