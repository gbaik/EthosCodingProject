import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Display extends Component { 
  constructor(props) { 
    super(props);
    
    this.state = {
      toggle: true,
      color: 'none'
    }

    this.children = [];

    this.expandFolder = this.expandFolder.bind(this);    
    this.toggleFolder = this.toggleFolder.bind(this);    
  }

  expandFolder(fileData, index) {
    if (fileData.children) {
      fileData.children.map((child) => {
        this.children.push(child)
      })
    }
  }

  toggleFolder() {
    var color = '#0E9BD1'

    if (!this.state.toggle) {
      color = 'white'
    }

    this.setState({
      toggle: !this.state.toggle,
      color: color
    })
  }

  closeFolder() {
    this.children = [];
  }

  render() {
    return (
      <div style={{backgroundColor: this.state.color}}>
        {this.state.toggle ? 
          <button onClick={() => {
            this.expandFolder(this.props.fileData, this.props.index);
            this.toggleFolder(this.props.fileData);
          }}>+</button> :  
          <button onClick={() => {
            this.closeFolder();  
            this.toggleFolder();
          }}>-</button>
        }
        {this.state.toggle ? 
         <div onClick={() => {
          this.expandFolder(this.props.fileData, this.props.index);
          this.toggleFolder();
          }}>{this.props.fileData.name}</div> :
          <div onClick={() => {
            this.closeFolder();
            this.toggleFolder();
          }}>{this.props.fileData.name}</div>
        }

        {this.children.map((child, index) => {   
          return (<Display 
            fileData={child} 
            index={index} 
            key={index}
          />)
        })}
      </div>
    );
  };
}

export default Display;