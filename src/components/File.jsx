import React from 'react';
import Display from './Display.jsx'

const File = ({fileData}) => {
  return (
    <div>
      {fileData.children ? fileData.children.map(file => {
        if (file.children) {
          return(file.children.map(child => 
            <div>
              <File fileData={child}/>
              <Display fileData={file} />
              <Display fileData={child} />              
            </div>
          ))
        } else {
          return (<Display fileData={file} />)                
        }
      }) : <div></div>}
    </div>
  );
}

export default File;