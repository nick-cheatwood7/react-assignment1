import React, { Component } from 'react';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';
import './App.css';

class App extends Component {
  state = {
    usernames: [
      {
        username: 'Haggy527'
      },
      {
        username: 'Nicolas107'
      }
    ]
  };

  usernameChangedHandler = event => {
    this.setState({
      usernames: [
        {
          username: event.target.value
        },
        {
          username: 'Nicolas107'
        }
      ]
    });
  };

  render() {
    return (
      <div className='App'>
        <UserOutput
          username={this.state.usernames[0].username}
          message={'Today is a great day'}
        />
        <UserOutput
          username={this.state.usernames[1].username}
          message={"I'm really learning React!"}
        />
        <UserInput
          changed={this.usernameChangedHandler}
          value={this.state.usernames[0].username}
        />
      </div>
    );
  }
}

export default App;
