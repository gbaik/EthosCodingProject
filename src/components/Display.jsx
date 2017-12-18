// const Display = ({fileData, toggleFolder, toggle, expandFolder, index}) 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Display extends Component { 
  constructor(props) { 
    super(props);
    
    this.state = {
      toggle: true 
    }

    this.toggleFolder = this.toggleFolder.bind(this);    
  }
  
  toggleFolder() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div>
        {this.state.toggle ? 
          <button onClick={() => {
            this.props.expandFolder(this.props.fileData, this.props.index);
            this.toggleFolder();
          }}>+</button> :  
          <button onClick={() => {
            this.toggleFolder();
            // closeFolder();          
          }}>-</button>
        }
        <div onClick={() => this.props.expandFolder(this.props.fileData, this.props.index)}>{this.props.fileData.name}</div>
        {console.log(this.state.toggle)}
      </div>
    );
  };
}


export default Display;