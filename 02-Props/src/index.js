import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

let profession = {
  pro1: 'Ingeniero en Informatica',
  pro2: 'Desarrollador Web'
};
let DateActual = 2021;
let DateBirth = 1996;

function Names(props) {
  return <span>{props.names}</span>;
}

function LastNames(props) {
  return <span>{props.lastNames}</span>;
}

function Rols() {
  return (
    <span>
      {profession.pro1} | {profession.pro2}
    </span>
  );
}

function Age() {
  return <span>{DateActual - DateBirth} Años</span>;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let names = 'Diego Jose';
    let lastNames = 'Chavez Chirinos';

    return (
      <div>
        <p>
          <i>Name:</i> <Names names={names} />
        </p>
        <p>
          <i>Last Name:</i> <LastNames lastNames={lastNames} />
        </p>
        <p>
          <i>Age:</i> <Age />
        </p>
        <p>
          <i>Profession:</i> <Rols />
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
