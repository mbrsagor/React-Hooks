import React, { useState, useContext } from "react";
import _ from "lodash";

import { ContactContext } from '../../context/contactContext';

const ContactForm = () => {
    // const [state, dispatch] = useContext(ContactContext);

    const name = useFormInput("");
    const email = useFormInput("");
    
    const onSubmit = () => {
        // dispatch({
        //     type: "ADD_CONTACT",
        //     payload: { id: _.uniqueId(10), name: name.value, email: email.value }
        // })

        // Reset Form
        name.onReset();
        email.onReset();
    }

    return (
        <div className="card">            
            <div className="card-header">
                <h4 className="card-title">Add new contact</h4>
            </div>
            <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Enter your name</label>
                        <input type="text"
                            className="form-control"
                            id="name"
                            {...name}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Enter email address</label>
                        <input type="email"
                            className="form-control"
                            id="email"
                            {...email}
                            placeholder="Enter valid email"
                            required
                        />
                    </div>
                    <button className="btn btn-success btn-sm" type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;


const useFormInput = (initalValues) => {
    const [value, setValue] = useState(initalValues);

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleReset = () => {
        setValue("");
    };
    
    return {
        value,
        onChange: handleChange,
        onReset: handleReset
    };
}
