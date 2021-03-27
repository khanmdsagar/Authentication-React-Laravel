import './index.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
