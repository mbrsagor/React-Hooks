import React from 'react';

const ContactForm = () => {

    const name = useFormInput("");
    const email = useFormInput("");
    
    const onSubmit = () => {
        
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


const useFormInput = () => {
    
}