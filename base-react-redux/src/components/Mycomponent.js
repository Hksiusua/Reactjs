import React from "react";
import Userinfor from "./Userinfor";
import Displayinfor from "./Displayinfor";
class Mycomponent extends React.Component {
  render() {
    return (
      <div>
        <Userinfor></Userinfor>
        <Displayinfor name="tran cong nghia" age="20"></Displayinfor>
      </div>
    );
  }
}
export default Mycomponent;
