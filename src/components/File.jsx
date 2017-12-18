import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Display from './Display.jsx'

class File extends Component { 
  constructor(props) { 
    super(props);
    console.log(props.fileData);
    this.state = {
      fileData: props.fileData
    }

    this.expandFolder = this.expandFolder.bind(this);
  }

  expandFolder(el) {
    console.log(el);
    this.setState({
      fileData: el
    })
  }

  render() {
    return (
      <div>
        {this.state.fileData.children ? this.state.fileData.children.map(file => {
          if (file.children && this.state.expand) {
            return(file.children.map(child => 
              <div>
                <Display fileData={file} />
                <Display fileData={child} />              
                <File fileData={child}/>
              </div>
            ))
          } else {
            return (
              <div>
                <Display fileData={file} expandFolder={this.expandFolder}/>
              </div>
            )                
          }
        }) : <div></div>}
      </div>
    );
  };
}

export default File;