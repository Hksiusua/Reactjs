import React from "react";

class Displayinfor extends React.Component {
  render() {
    return (
      <div>
        <div>My name {this.props.name}</div>
        <div>My age {this.props.age}</div>
      </div>
    );
  }
}
export default Displayinfor;
