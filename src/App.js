// @flow

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <Router>
    <div>
      <div className="App">
        <Navbar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;

/*      <div>
        <div id="topnav">
          <Link to="/search" className="logoLink">
            <img className="logo"src="https://image.ibb.co/cRbaE6/imageedit_16_4158574454.png"/>
            YALP!
          </Link>
          {this.hasLoggedUser() ?
            <span>
              <Link to="/" className="logout"><span onClick={this.logoutUser.bind(this)}>Log Out</span></Link>
              <Link to="/profile" className="profile"><span>Profile</span></Link>
            </span> :
              this.props.location.pathname !== '/' && this.props.location.pathname !== '/login' && this.props.location.pathname !== '/signup' ? 
                <Link to="/" className="profile"><span>Log In</span></Link> : null
          }
        </div>
        <Switch>
          <Route exact path="/" render={() => (!this.hasLoggedUser() ?
            <div id="form-background"><div id="form"><Home /></div></div> :
            <Redirect to="/search"/>
          )}/>
          <Route path="/search" render={() => <div id="form-background"><div id="form"><Search goToListings={this.pushToListings.bind(this)}/></div></div>}/>
          <Route path="/login" render={(props) => (!this.hasLoggedUser() ?
            <div id="form-background"><div id="form"><Login history={props.history} loginUser={this.loginUser.bind(this)}/></div></div> :
            <Redirect to="/search"/>
          )}/>
          <Route path="/signup" render={(props) => (!this.hasLoggedUser() ?
            <div id="form-background"><div id="form"><Signup history={props.history} createUser={this.createUser.bind(this)}/></div></div> :
            <Redirect to="/search"/>
          )}/>
          <Route path="/listings" render={(props) => <div id="listings"><BusinessList location={props.location}/></div>}/>
          <Route path="/business/:id" render={(props) => <BusinessPage history={props.history} businessPlaceId={props.match.params.id}/>}/>
          <Route path="/profile" render={() => (this.hasLoggedUser() ?
            <div><Profile profileId={this.state.userId} /></div> :
            <Redirect to="/"/>
          )}/>
        </Switch>*/

// import React, { Component } from 'react';

