import React, { Component } from 'react';
import { render } from 'react-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  // syncEmailChanges(email) {
  //   this.setState({
  //     email: email
  //   });
  // }

  syncChanges(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  // syncPasswordChanges(password) {
  //   this.setState({
  //     password: password
  //   });
  // }

  submitForm = () => {
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          onChange={ev => {
            this.syncChanges(ev.target.value, 'email');
          }}
          type="email"
          value={this.state.email}
          placeholder="email"
        />
        <input
          onChange={ev => {
            this.syncChanges(ev.target.value, 'password');
          }}
          type="password"
          value={this.state.password}
          placeholder="*******"
        />
        <div>
          <input type="submit" value="Log In" onClick={this.submitForm} />
        </div>
      </form>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
