import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/palindrome/palindrome').then(response => console.log(response.status));
    //if (response.status !== 200) throw Error(body.message);
    
  };

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.callApi}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default App;