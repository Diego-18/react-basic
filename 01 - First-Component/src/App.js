import React, { Component } from 'react';
import './style.css';

function MiComponente() {
  return <p>Hola Mundo</p>;
}

class MiComponenteClase extends Component {
  render() {
    return <p>Hola soy de la clase</p>;
  }
}

export default function App() {
  return (
    <div>
      <MiComponenteClase />
      <MiComponente />
    </div>
  );
}
