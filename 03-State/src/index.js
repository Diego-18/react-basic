import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  Up = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.Up}>Up</button>
      </div>
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
        <Count />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
