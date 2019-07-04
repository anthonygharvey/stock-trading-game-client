import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUsername } from "../actions";
import Username from "./Username";

class UsernameInput extends Component {
  handleNameChange = e => {
    this.props.updateUsername(e.target.value, this.props.portfolio);
  };

  render() {
    return <Username handleNameChange={this.handleNameChange} />;
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
