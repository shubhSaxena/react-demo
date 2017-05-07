import React from 'react';

class App extends React.Component {
  render (){
    let txt = this.props.txt;
    return <h1>{txt}</h1>
  }
}

// class TestApp extends React.Component {
//   render () {
//     // createElement(html tag, props, another element/string)
//     return React.createElement('h1', null, 'Hello')
//   }
// }


// stateless Component (cant have state/ classes can have state)
//const App = () => <h1> Hello stateless Component </h1>

export default App;
