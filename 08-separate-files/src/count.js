import React, { Component, useState } from 'react';

function Count(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Conteo: {count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
    </div>
  );
}

export default Count;
