import React from 'react';

const File = ({fileData}) => {
  return (
    <div>
      {fileData.children ? fileData.children.map(file => {
        console.log(file);
        if (file.children) {
          return(file.children.map(child => 
            <File fileData={child}/>
          ))
        }
      }) : <div></div>}
    </div>
  );
}

export default File;