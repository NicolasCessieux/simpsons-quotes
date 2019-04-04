import React, { Component } from 'react';
import logo from './logo.svg';


class Working extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.on
    };
  }
  handleClick = () => {
    console.log('Button clicked');
    this.setState({ on: !this.state.on });
  };
  render() {
    const working = this.state.on ? 'working on' : 'working off';
    return (
      <div className="Working">
        <button
          onClick={this.handleClick}
          className={working}
        >
          {working.toUpperCase()}
        </button>
        <figure className={working} />
      </div>
    );
  }
}




export default Working;