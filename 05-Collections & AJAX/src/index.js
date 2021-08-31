import React, { Component } from 'react';
import { render } from 'react-dom';

class Paragraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    let promise = fetch('https://jsonplaceholder.typicode.com/posts');

    promise
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.articles.map(article => {
          return <p>{article.title}</p>;
        })}
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
        <Paragraph />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
