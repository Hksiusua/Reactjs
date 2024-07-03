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
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();

    // alert("hello");
  };

  render() {
    return (
      <div>
        <h2>heloo</h2>;<h2>what's your name {this.state.name}</h2>
        <button onClick={this.handleClick}>Click here</button>
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          ></input>
          <button>submit</button>
        </form>
      </div>
    );
  }
}
export default Mycomponent;
