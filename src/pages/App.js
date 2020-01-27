import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
//import Axios from 'axios';
import MovieDetail from './MovieDetail';
import Video from './Video';
import Navbar from 'components/Navbar';
import History from './History';

function App() {
  //Axios.defaults.baseURL = config.ciApiUrl;
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/details" component={MovieDetail}/>
        <Route exact path="/video" component={Video}/>
        <Route exact path="/history" component={History}/>
      </Switch>
    </Router>
  );
}

export default App;
