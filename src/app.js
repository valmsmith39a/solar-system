import React from 'react';

export default class App extends React.Component {
  render() {
    return(
      <div id='hello-div'>
        Hello from React!!!!!
        <button>Some button</button>
        <ul>
          <li>Mercury</li>
          <li>Venus</li>
          <li>Earth</li>
          <li>Mars</li>
        </ul>
      </div>
    )
  }
}