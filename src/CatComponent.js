import React, { Component } from 'react';
class CatComponent extends React.Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src="/cat.gif" />
      </div>
    );
  }
}
export default CatComponent;