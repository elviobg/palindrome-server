import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
// Theme
import { deepOrange500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


// Theme
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      word: '' ,
      open: false,
      answer: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange(event) {
    this.setState({word: event.target.value});
  }

  setStateAnswer = function(response){
    var currentAnswer = ""
    if (response.status === 200) 
      currentAnswer = this.state.word.concat(" is a palindrome")
    else
      currentAnswer =  this.state.word.concat(" is not a palindrome")

    console.log(currentAnswer)
    this.setState({answer: currentAnswer})    
    this.handleOpen()
  }

  callApi = async () => {
    const wordToCheck = this.state.word
    console.log(wordToCheck)
    const response = await fetch('/palindrome/'.concat(wordToCheck))
    this.setStateAnswer(response);
  };

  render () {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (   
      <MuiThemeProvider muiTheme={muiTheme}>   
        <div className='container'>
          <h1>Palindrome Checker!</h1>
          <TextField              
            floatingLabelText='Enter any word to check if is a palindrome!'
            value={this.state.word}
            onChange={this.handleChange}
            style ={{width: '30%'}}
          />
          <br/>
          <RaisedButton label="submit" onClick={this.callApi} primary/>
          <Dialog
            title="Dialog With Date Picker"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
          {this.state.answer}
          </Dialog>
        </div> 
      </MuiThemeProvider>
    )
  }
}

export default App;