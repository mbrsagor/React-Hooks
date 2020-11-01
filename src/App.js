import React from 'react';
import Hooks from './components/Hooks';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-3">
          <h2>Welcome to React Hooks</h2>
          <hr />
          <Hooks />
        </div>
      </div>
    </div>
  )
}

export default App;
