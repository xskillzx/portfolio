// @flow
import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Projects from './components/Projects.jsx';
import Gaming from './components/Gaming.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Footer />

          <Switch>
            <Route
              exact path="/"
              render={props => (<Projects projects={myProjects} />)}
            />
            <Route
              exact path="/gaming"
              render={props => (<Gaming projects={myProjects} />)}
            />
            <Route
              exact path="/about"
              render={props => (<About projects={myProjects} />)}
            />
            <Route
              exact path="/contact"
              render={props => (<Contact projects={myProjects} />)}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

let myProjects = [
  ["Yalp", "../../public/assets/images/yalp1.png", ["Yalp is the lovechild of Yelp and Meetup. Users have the opportunity to find a place they'd like to visit then create an event for others to join! No need to hassle with event and location details.", "Tech stack: MySQL, Axios, React, Node"]],
  ["Squeaker", "../../public/assets/images/squeaker1.png", ["Squeaker is a light-hearted reimplementation of Twitter.", "Tech stack: MySQL, Express, React, Node"]]
];

  // render() {
  //   return (
  //     <div id="reactapp">
  //       <NavBar
  //         fixedTop="true"
  //         className="squeaker-nav"
  //         shouldReplace={this.props.location.pathname === '/'}
  //         inputValue={this.state.inputValue}
  //         searchHandler={this.searchHandler.bind(this)}
  //         onChangeHandler={this.onInputChangeHandler.bind(this)}
  //         userpic={this.state.userinfo[0].profile_img_url}
  //       />
  //       <Switch>
  //         <Route exact path="/" render={props => (<HomePage counts={this.state.counts} userinfo={this.state.userinfo} />)}/>
  //         <Route path="/search" render={props => (<SearchPage userinfo={this.state.userinfo} counts={this.state.counts} {...props.location}/>)}/>
  //         <Route path="/login" render={props => (<span>Login Page</span>)}/>
  //         <Route path="/:username" render={props => (<UserPage username={props.match.params.username}/>)}/>
  //       </Switch>
  //     </div>
  //   );
  // }
// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

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

