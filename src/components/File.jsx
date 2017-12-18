import React, { Component } from 'react';

class File extends Component {
  constructor(props) {
    super(props);
    console.log(props.test);
  }

  render() {
    let test;
    if (this.props.test.children) {
      test = (this.props.test.children.map(file => {
        if (file.children) {
            file.children.map(child => {
              return (<File test={child}/>)
        })
          }
        }))
    } else {
      test = (
        <header>
          <h1>Helo</h1>
        </header>
      )
    }

    return (
      <div >
        {this.props.test.children.map(file => {
        if (file.children) {
            return (file.children.map(child => {
              return (<File test={child}/>)
            }))
          }
        })}
      </div>
    );
  }
}

export default File;