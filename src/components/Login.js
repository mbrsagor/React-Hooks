import React, {useState} from 'react';

export default function Login() {

    const [state, setState] = useState({
        // Here, initialState username, password is null
        username: '', 
        password: ''
    });

    const printValues = event => {
        event.preventDefault();
        console.log(`Username is: ${state.username}\nPassword is: ${state.password}`);
    }

    const changeHandler = e => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="col-lg-6 offset-3">
            <div className="card">
                <div className="card-header text-center">
                    <h4 className="card-title">User login form</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={printValues}>
                        <div className="form-group">
                            <label htmlFor="username">Enter Username</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter valid username"
                                name="username"
                                className="form-control"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Enter Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="***************"
                                name="password"
                                className="form-control"
                                onChange={changeHandler}
                            />
                        </div>
                        <button type="submit" className="btn btn-success btn-sm">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
