import React, { Component } from 'react';
import './App.scss';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Organization from './components/Organization';
import Teammate from './components/Teammate';
import OrgDetails from './components/OrgDetails';
import Landing from './components/Landing';
import Posts from './components/Posts';
// import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';


class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users/register" component={Register} />
          <Route path="/users/login" component={Login} />
          <Route exact path="/users/org" component={Organization}/>
          <Route exact path="/users/org/invite" component={Teammate}/>
          <Route exact path="/users/org/:id" component={OrgDetails}/>
          <Route exact path="/landing" component={Landing}/>
          <Route exact path="/posts" component={Posts}/>


        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
    );
  }
}

export default App;
