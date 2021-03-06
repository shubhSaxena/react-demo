import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    )
  }
}

class Buttons extends React.Component {
  constructor (){
    super();
    this.state = {selected: 'None'}
  }
  selectItem (selected){
    this.setState({selected})
  }
  render () {
    let fn = child =>
      React.cloneElement(child, {
        onClick: this.selectItem.bind(this, child.props.value)
      })
    let items = React.Children.map(this.props.children, fn);
    return (
      <div>
        <h2>You have selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}





// class App extends React.Component {
//   render() {
//     return (
//       <Parent>
//         <div className="childA"></div>
//         <div className="childB"></div>
//       </Parent>
//     )
//   }
// }
//
// class Parent extends React.Component {
//   render() {
//     // console.log(this.props.children);
//     // let items = React.Children.map(this.props.children, child => child)
//     let items = React.Children.forEach(this.props.children, child => console.log(child.props.className))
//     // let items = React.Children.toArray(this.props.children)
//     console.log(items);
//     return (
//         null
//     )
//   }
// }

// const HOC = (InnerComponent) =>  class extends React.Component {
//   constructor (){
//     super();
//     this.state = {count: 0}
//   }
//   update(){
//     this.setState({count: this.state.count + 1})
//   }
//   componentWillMount(){
//     console.log("WillMount");
//   }
//   render () {
//     return (
//       <InnerComponent
//         {...this.props}
//         {...this.state}
//         update={this.update.bind(this)}
//       />
//     )
//   }
// }
//
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Button>button</Button>
//         <hr/>
//         <LabelHOC>label</LabelHOC>
//       </div>
//     )
//   }
// }
//
// const Button = HOC((props) =>  <button onClick={props.update}>
//     {props.children} - {props.count}
//     </button>)
//
// class Label extends React.Component {
//   componentWillMount(){
//     console.log("Label Will Mount");
//   }
//   render() {
//     return (
//       <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
//     )
//   }
// }
//
//
// const LabelHOC = HOC(Label)
//
//
//




// class App extends React.Component {
//   constructor() {
//     super ();
//     this.state = {items: []}
//   }
//   componentWillMount(){
//     fetch('http://swapi.co/api/people/?format=json')
//       .then( response => response.json() )
//       .then( ({results: items}) => this.setState({items}))
//   }
//   filter(e){
//     this.setState({filter: e.target.value})
//   }
//   render(){
//     let items = this.state.items;
//     if(this.state.filter){
//       items = items.filter( item =>
//       item.name.toLowerCase()
//     .includes(this.state.filter.toLowerCase()))
//     }
//     return (
//       <div>
//       <input type="text" onChange={this.filter.bind(this)} />
//       {items.map(item =>
//         <Person key={item.name} person={item}/>)}
//       </div>
//     )
//   }
// }
//
// const Person = (props) => <h4>{props.person.name}</h4>


// import PropTypes from 'prop-type';
//
// class App extends React.Component {
//   constructor (){
//     super();
//     this.state = {increasing: false}
//   }
//   update (){
//     ReactDOM.render(<App val={this.props.val+1}/>, document.getElementById('root'))
//   }
//   componentWillReceiveProps(nextProps){
//     this.setState({increasing: nextProps.val > this.props.val})
//   }
//   shouldComponentUpdate(nextProps, nextState){
//     return nextProps.val % 5 == 0;
//   }
//   componentDidUpdate(prevProps, prevState){
//     console.log('prevProps:',prevProps.val);
//   }
//   render() {
//     console.log(this.state.increasing);
//     return (
//       <button onClick={this.update.bind(this)}>
//       {this.props.val}
//       </button>
//     )
//   }
// }
//
// App.defaultProps = {val: 0}

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {val: 0}
//     this.update = this.update.bind(this)
//   }
//   update(){
//     this.setState({val: this.state.val + 1})
//   }
//   componentWillMount(){
//     console.log("componentWillMount");
//     this.setState({m: 2})
//   }
//   componentDidMount(){
//     console.log("componentDidMount");
//     // console.log(ReactDOM.findDOMNode(this));
//     this.inc = setInterval(this.update, 500);
//   }
//   componentWillUnmount(){
//     console.log("componentWillUnmount");
//     clearInterval(this.inc);
//   }
//   render() {
//     console.log('render');
//     return <button onClick={this.update}>
//     {this.state.val * this.state.m}</button>
//   }
// }
//
// class Wrapper extends React.Component {
//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>UnMount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//     constructor(){
//       super();
//       this.state = {a: ''}
//     }
//     update (){
//       this.setState({
//         a: this.a.refs.input.value,
//         b: this.refs.b.value
//       })
//     }
//     render(){
//       return (
//         <div>
//           <Input
//           ref={ component => this.a = component}
//           onChange={this.update.bind(this)}
//           /> {this.state.a}
//           <hr/>
//           <input
//           ref="b"
//           type="text"
//           onChange={this.update.bind(this)}
//           /> {this.state.b}
//         </div>
//       )
//     }
// }
//
// class Input extends React.Component {
//   render (){
//     return <div><input ref="input" type="text" onChange={this.props.update} /></div>
//   }
// }

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
