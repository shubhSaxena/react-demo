import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
      super();
      this.state = {a: ''}
    }
    update (){
      this.setState({
        a: this.a.refs.input.value,
        b: this.refs.b.value
      })
    }
    render(){
      return (
        <div>
          <Input
          ref={ component => this.a = component}
          onChange={this.update.bind(this)}
          /> {this.state.a}
          <hr/>
          <input
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
          /> {this.state.b}
        </div>
      )
    }
}

class Input extends React.Component {
  render (){
    return <div><input ref="input" type="text" onChange={this.props.update} /></div>
  }
}

//
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {currentEvent: '---'}
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({currentEvent: e.type})
//   }
//   render () {
//     return (
//       <div>
//         <textarea cols="30" rows="5"
//         onKeyPress={this.update}
//         onCopy={this.update}
//         onCut={this.update}
//         onPaste={this.update}
//         onFocus={this.update}
//         onBlur={this.update}
//         onDoubleClick={this.update}
//         />
//         <h1>{this.state.currentEvent}</h1>
//       </div>
//     )
//   }
// }




//
// const Title = (props) => <h1>Title: {props.text} </h1>
//
// Title.propTypes = {
//   text(props, propName, component){
//     if(!(propName in props)){
//       return new Error('missing ${propName}')
//     }
//     if(props[propName].length < 8){
//       return new Error('${propName} was too short')
//     }
//   }
// }




// class App extends React.Component {
//   render () {
//     return (
//       <Button>I  <Heart />  React</Button>
//     )
//   }
// }

// const Button = (props) => <button>{props.children}</button>
//
// class Heart extends React.Component {
//   render () {
//     return <span>&hearts;</span>
//   }
// }











// import PropTypes from 'prop-types';
//
// class App extends React.Component {
//   constructor () {
//     super ();
//     this.state = {
//       txt: 'this is the state txt'
//     }
//   }
//   update (e) {
//     this.setState({txt: e.target.value})
//   }
//   render (){
//     return (
//       <div>
//         <input type="text" onChange={this.update.bind(this)} />
//         <h1>{this.state.txt}</h1>
//         <Widget update={this.update.bind(this)} />
//         <Widget update={this.update.bind(this)} />
//         <Widget update={this.update.bind(this)} />
//       </div>
//     )
//   }
// }
//
// const Widget = (props) =>
//  <input type="text" onChange={props.update} />


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
