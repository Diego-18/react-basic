import React, { Component, useState } from 'react';
import { render } from 'react-dom';

function Count(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Conteo: {count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
    </div>
  );
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
