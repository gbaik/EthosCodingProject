import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Display from './Display.jsx'

class File extends Component { 
  constructor(props) { 
    super(props);
  }

  render() {
    return (
      <div className="topFolder">
        {this.props.fileData.children.map((file, index) => 
            <div id={index}>
              <Display 
                fileData={file} 
                index={index} 
                key={index}
              />
            </div>               
        )}
      </div>
    );
  };
}

export default File;

