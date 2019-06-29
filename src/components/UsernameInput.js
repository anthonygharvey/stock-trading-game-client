import React, { Component } from "react";

class UsernameInput extends Component {
  render() {
    return (
      <div className="ui input focus">
        <input type="text" placeholder="username" />
      </div>
    );
  }
}

export default UsernameInput;
