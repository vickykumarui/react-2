import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputValue: ''
  }

  changeLengthListener = (event)=>{
    console.log(event.target.value)
    this.setState({inputValue : event.target.value})
     
  }

  changeTextHandler = (idx) =>{
    let text = this.state.inputValue;
    text = text.slice(0,idx) + text.slice(idx+1);
    this.setState({inputValue: text});
  }

  render(){
    let char = '';
    char = Array.prototype.map.call(this.state.inputValue,(char, idx) =>{
      return (
      <CharComponent key = {idx} char = {char} idx = {idx} clickHandler = {this.changeTextHandler.bind(this, idx)} />
      )
    })
   
    return (
      <div className="App">
        <label>Enter input</label>
       <input type = "text" value = {this.state.inputValue} onChange = {(event) => this.changeLengthListener(event)} />
        <p>{this.state.inputValue}</p>
        <ValidationComponent textLength = {this.state.inputValue.length} />
        {char}
      </div>
    );
  }
 
}

export default App;
