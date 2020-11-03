import React, { useState } from 'react';

export default function Contact() {

    const [name, setName] = useState('');

    const submitHandler = (evt) => {
        evt.preventDefault();
        console.log(`Your name is:  ${name}`);
    }

    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Simple contact form</h4>
            </div>
            <div className="card-body">
                <form onSubmit={submitHandler}>
                    
                    <input type="text"
                        className="form-control mb-2"
                        placeholder="Enter your name"
                        onChange={e => setName(e.target.value)} />
                <button type="submit" className="btn btn-success btn-sm">Send</button>
                </form>
            </div>
        </div>
    )
}
