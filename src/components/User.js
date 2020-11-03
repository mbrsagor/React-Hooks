import React, {useState} from 'react';

export default function User() {

    const [user, setUser] = useState('Mbr-Sagor');

    return (
        <div className="card text-center">
            <div className="card-header">
                <h4 className="card-title">User</h4>
            </div>
            <div className="card-body">
                <h2>Hello I'm {user}</h2>
                <button
                    className="btn btn-success btn-sm"
                    onClick={() => setUser('Bozlur Rosid Sagor')}>
                    ChangeName
                </button>
            </div>
        </div>
    )
}
