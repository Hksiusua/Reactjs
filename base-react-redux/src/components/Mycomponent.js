import React from "react";
class Mycomponent extends React.Component {
  state = {
    name: "hoa hóa hòa",
    age: 20,
  };

  handleClick = () => {
    this.setState({
      name: "hù hu hú",
    });
  };

  render() {
    return (
      <div>
        <h2>heloo</h2>;<h2>what's your name {this.state.name}</h2>
        <button onClick={this.handleClick}>Click here</button>
      </div>
    );
  }
}
export default Mycomponent;
