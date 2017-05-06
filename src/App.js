import React from 'react';
import {Router, Route, browserHistory } from 'react-router';

const Home = () => <div><h1>Home</h1></div>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;

class App extends React.Component {
  render() {
    return(
      <Router history={ browserHistory }>
       <Route path="/" component={Home}></Route>
       <Route path="/about" component={About}></Route>
       <Route path="/contact" component={Contact}></Route>
      </Router>
    )
  }
}

export default App;
