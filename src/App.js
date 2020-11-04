import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Hooks from './components/Hooks';
import Counter from './components/Counter';
import User from './components/User';
import Contact from './components/Contact';
import Login from './components/Login';
import Header from './components/Header';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Header />
          <h2>Welcome to React Hooks</h2>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Hooks} />
              <Route path='/counter' component={Counter} />
              <Route path='/user' component={User} />
              <Route path='/contact' component={Contact} />
              <Route path='/login' component={Login} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App;
