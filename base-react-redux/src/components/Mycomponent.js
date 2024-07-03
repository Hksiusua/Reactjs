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
  render() {
    return (
      <div>
        <Userinfor></Userinfor>
        
        
        <br></br>
        <br></br>

        <Displayinfor listUsers={this.state.listUsers}></Displayinfor>
      </div>
    );
  }
}
export default Mycomponent;
