import React from "react";
import "./Displayinfor.scss";
import logo from "./../logo.svg";
class Displayinfor extends React.Component {
  state = {
    isshowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isshowListUser: !this.state.isshowListUser,
    });
  };

  render() {
    const { listUsers } = this.props;

    return (
      <div>
        <img src={logo} />
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            Hide list users <br></br>
            {this.state.isshowListUser === true
              ? "Hide list users"
              : "show list users"}
          </span>
        </div>
        {this.state.isshowListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={user.age > 20 ? "red" : "green"}>
                  <div>My name {user.name}</div>
                  <div>My age {user.age}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default Displayinfor;
