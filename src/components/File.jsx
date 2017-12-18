import React from 'react';
import Display from './Display.jsx'

const File = ({fileData}) => {
  return (
    <div>
      {fileData.children ? fileData.children.map(file => {
        if (file.children) {
          return(file.children.map(child => 
            <div>
              <Display fileData={file} />
              <Display fileData={child} />              
              <File fileData={child}/>
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