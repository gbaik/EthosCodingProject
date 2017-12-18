import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display.jsx'

const File = ({fileData}) => (
  <div className="topFolder">
    {fileData.children.map((file, index) => 
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


export default File;

