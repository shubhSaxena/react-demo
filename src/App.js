import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      txt: 'this is the state txt'
    }
  }
  update (e) {
    this.setState({txt: e.target.value})
  }
  render (){
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}




//
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number
// }
//
// App.defaultProps = {
//   txt: "this is the default txt"
// }
//




// class TestApp extends React.Component {
//   render () {
//     // createElement(html tag, props, another element/string)
//     return React.createElement('h1', null, 'Hello')
//   }
// }


// stateless Component (cant have state/ classes can have state)
//const App = () => <h1> Hello stateless Component </h1>

export default App;
