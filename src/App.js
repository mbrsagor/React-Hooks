import React from 'react';
// import Hooks from './components/Hooks';
// import Counter from './components/Counter';
// import User from './components/User';
import Contact from './components/Contact';
import Login from './components/Login';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-3">
          <h2>Welcome to React Hooks</h2>
          {/* <hr />
          <Hooks />
          <Counter /> */}
          <br />
          <hr />
          <Contact />
          <br />
          <hr />
          <Login />
        </div>
      </div>
    </div>
  )
}

export default App;
