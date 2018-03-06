import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      word: ''  
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({word: event.target.value});
  }

  setStateAnswer = function(response){
    if (response.status === 200) 
      console.log(this.state.word.concat(" is a palindrome"))
    else
      console.log(this.state.word.concat(" is not a palindrome"))
  }

  callApi = async () => {
    console.log(this.state.word)
    const response = await fetch('/palindrome/'.concat(this.state.word))
    this.setStateAnswer(response);
  };

  render () {
    return (
      <div>
        <div className='label__container'>
          <label>
            <textarea value={this.state.word} onChange={this.handleChange}/>
          </label>
        </div>
        <br/>
        <div className='button__container'>
          <button className='button' onClick={this.callApi}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default App;