import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';




const Display = (fileurl) => (
  <img src={fileUrl}/>
)


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
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
