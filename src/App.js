import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './common/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    let routes = (
      <Layout>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route component={NotFound} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );

    return routes;
  }
}

export default App;
