import React, { Component } from 'react';
import File from './File.jsx'

const App = () => (
  <div >
    {fileData.map(file => 
    <File test={file}/>
    )
    }
  </div>
)

export default App;
