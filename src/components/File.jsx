import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Display from './Display.jsx'

class File extends Component { 
  constructor(props) { 
    super(props);

    this.fileData = [props.fileData.children];

    this.expandFolder = this.expandFolder.bind(this);
  }

  expandFolder(fileData, index) {
    // var nestedFolder = document.getElementById(index);    
    // if (fileData.children) {
    //   fileData.children.forEach(child => {        
    //     nestedFolder.innerHTML += (`${<Display />}`);
    //     console.log(child);
    //     this.fileData.push(child);
    //   })
    // }
    console.log(this.fileData);
  }


  render() {
    return (
      <div >
        {this.props.fileData.children.map((file, index) => {
          return (
            <div id={index}>
              <Display 
                fileData={file} 
                expandFolder={this.expandFolder} 
                index={index} key={index}
              />
            </div>
          )                
        })}
        {this.fileData.map((file) => {
          console.log(file);
        })}
      </div>
    );
  };
}

export default File;

