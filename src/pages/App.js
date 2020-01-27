import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Axios from 'axios';
import MovieDetail from './MovieDetail';

function App() {
  //Axios.defaults.baseURL = config.ciApiUrl;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/details" component={MovieDetail}/>
      </Switch>
    </Router>
  );
}

export default App;
