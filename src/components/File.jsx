import React, { Component } from 'react';

class File extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        {this.props.test.children ? this.props.test.children.map(file => {
          console.log(file.name);
          if (file.children) {
             return(file.children.map(child => 
              <File test={child} flag={false}/>
            ))
          }
        }) : <div></div>}
      </div>
    );
  }
}

export default File;