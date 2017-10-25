import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
    }
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleUsernameInput(event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordInput(event) {
    this.setState({
      password: event.target.value
    })
  }

  loginUser() {
    console.log(`Logging in ${this.state.username} with password ${this.state.password}`)
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleUsernameInput}
          placeholder="Username"
          value={this.state.username} />
        <input
          onChange={this.handlePasswordInput}
          placeholder="Password"
          value={this.state.password} />
        <button
          onClick={this.loginUser} >
          Login
            </button>
      </div>
    )
  }
}

export default App;
