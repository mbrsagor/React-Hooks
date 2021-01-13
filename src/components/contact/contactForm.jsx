import React from 'react';

const ContactForm = () => {
    
    return (
        <div className="card">            
            <div className="card-header">
                <h4 className="card-title">Add new contact</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="name">Enter your name</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Enter email address</label>
                    <input type="email"
                        className="form-control"
                        id="name"
                        placeholder="Enter valid email"
                        required
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
