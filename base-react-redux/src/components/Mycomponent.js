import React from "react";
import Userinfor from "./Userinfor";
import Displayinfor from "./Displayinfor";
class Mycomponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "nghiadzai", age: 20 },
      { id: 2, name: "hoàidzai", age: 40 },
      { id: 3, name: "linhadzai", age: 60 },
    ],
  };

  handleAddNewUser = (userObj) => {
    console.log("Check: ", userObj);
    // coppy the array add userObj the first
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  render() {
    return (
      <div>
        <Userinfor handleAddNewUser={this.handleAddNewUser}></Userinfor>

        <Displayinfor listUsers={this.state.listUsers}></Displayinfor>
      </div>
    );
  }
}
export default Mycomponent;
