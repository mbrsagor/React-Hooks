import React, { useState } from 'react';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(`Your name is:  ${name}\nYour email is: ${email}\nYour message: ${message}`);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-3">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Simple contact form</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control mb-2"
                                        placeholder="Enter your name"
                                        onChange={e => setName(e.target.value)} />
                                </div>
                                    
                                <div className="form-group">
                                    <input type="email"
                                        className="form-control mb-2"
                                        placeholder="Enter your email"
                                        onChange={e => setEmail(e.target.value)} />
                                </div>
                                    
                                <div className="form-group">
                                    <textarea
                                            className="form-control mb-2"
                                            placeholder="Enter your email"
                                            onChange={e => setMessage(e.target.value)}
                                            cols="30" rows="10">
                                    </textarea>
                                </div>
                                <button type="submit" className="btn btn-success btn-sm">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
