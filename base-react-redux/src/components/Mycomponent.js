import React from "react";
class Mycomponent extends React.Component {
  state = {
    name: "hoa hóa hòa",
    age: 20,
  };
  render() {
    return (
      <div>
        <h2>heloo</h2>;<h2>what's your name {this.state.name}</h2>
      </div>
    );
  }
}
export default Mycomponent;
