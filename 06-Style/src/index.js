import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

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
          return (
            <div
              className="card"
              style={{ backgroundColor: 'green', color: 'white' }}
            >
              <p>{article.title}</p>
            </div>
          );
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
