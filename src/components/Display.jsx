// const Display = ({fileData, toggleFolder, toggle, expandFolder, index}) 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Display extends Component { 
  constructor(props) { 
    super(props);
    
    this.state = {
      toggle: true,
      color: 'none'
    }

    this.toggleFolder = this.toggleFolder.bind(this);    
  }
  
  toggleFolder() {
    var color = '#0E9BD1'

    if (!this.state.toggle) {
      color = 'white'
    }

    console.log(color);
    this.setState({
      toggle: !this.state.toggle,
      color: color
    })
  }


  render() {
    // var style = 
    return (
      <div style={{backgroundColor: this.state.color}}>
        {this.state.toggle ? 
          <button onClick={() => {
            this.props.expandFolder(this.props.fileData, this.props.index);
            this.toggleFolder();
          }}>+</button> :  
          <button onClick={() => {
            // closeFolder();  
            this.toggleFolder();
          }}>-</button>
        }
        <div onClick={() => {
          this.props.expandFolder(this.props.fileData, this.props.index)
          this.toggleFolder()
        }}>{this.props.fileData.name}</div>
        {console.log(this.state)}
      </div>
    );
  };
}


export default Display;