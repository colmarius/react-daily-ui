import React, { Component } from 'react'
import './App.css';

class App extends Component {
  static defaultProps = {
    image: 'http://i.giphy.com/l117HrgEinjIA.gif'
  }

  render() {
    const bgStyle = { backgroundImage: 'url(' + this.props.image + ')' }
    return (
      <div className="FourOhFour">
        <div
          className="bg"
          style={ bgStyle }
        />
        <div className="code">404</div>
      </div>
    );
  }
}

export default App
