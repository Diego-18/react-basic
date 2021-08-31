import React, { Component } from 'react';
import { render } from 'react-dom';

import Count from './count';

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
