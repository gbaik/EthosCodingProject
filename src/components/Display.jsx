import React from 'react';

const Display = ({fileData}) => {
  return (
    <div>
      <h1>Helo</h1>
      {console.log(fileData.name)}
    </div>
  );
}

export default Display;