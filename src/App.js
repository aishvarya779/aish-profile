import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './common/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Prfoile from './components/Profile';
import Projects from './components/Projects';

class App extends Component {
  render() {
    let routes = (
      <Layout>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/profile" component={Prfoile} />
          <Route path="/projects" component={Projects} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );

    return routes;
  }
}

export default App;
