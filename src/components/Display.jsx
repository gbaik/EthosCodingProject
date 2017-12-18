import React from 'react';
import ReactDOM from 'react-dom';

const Display = ({fileData, expandFolder}) => {
  return (
    <div>
      <button onClick={() => expandFolder(fileData)}>+</button>
      <h1>{fileData.name}</h1>
      {console.log(fileData.name)}
    </div>
  );
}

export default Display;