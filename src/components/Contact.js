import React, { useState } from 'react';

export default function Contact() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const submitHandler = (evt) => {
        evt.preventDefault();
        console.log(`Your name is:  ${name}\nYour email is: ${email}`);
    }

    return (
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

                    <button type="submit" className="btn btn-success btn-sm">Send</button>
                </form>
            </div>
        </div>
    )
}
