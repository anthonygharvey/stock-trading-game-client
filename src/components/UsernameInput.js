import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUsername } from "../actions";

class UsernameInput extends Component {
  handleNameChange = e => {
    this.props.updateUsername(e.target.value, this.props.portfolio);
  };

  render() {
    return (
      <div className="ui input focus">
        <input
          type="text"
          placeholder="username"
          onChange={this.handleNameChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.portfolio.user_name,
    portfolio: state.portfolio
  };
};

export default connect(
  mapStateToProps,
  {
    updateUsername: updateUsername
  }
)(UsernameInput);
