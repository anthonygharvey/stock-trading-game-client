import React, { Component } from "react";
import { connect } from "react-redux";
import { leaderboard } from "../actions/leaderboard";

class Leaderboard extends Component {
  componentDidMount() {
    this.props.getLeaderboard();
  }

  render() {
    const { leaderboard } = this.props;
    function formatDate(date) {
      let newDate = new Date(date);
      return (
        newDate.getMonth() +
        1 +
        "/" +
        newDate.getDate() +
        "/" +
        newDate.getFullYear()
      );
    }

    return (
      <>
        <h3>LEADERBOARD</h3>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Stock</th>
              <th>% Gain</th>
              <th>Date</th>
            </tr>
          </thead>
          {Object.keys(leaderboard).length === 0 ? (
            <tbody>
              <tr />
            </tbody>
          ) : (
            <tbody>
              {leaderboard.map(player => {
                return (
                  <tr key={player.id}>
                    <td>{player.user_name}</td>
                    <td>{player.stock}</td>
                    <td>{(player.percentage_change * 100).toFixed(2) + "%"}</td>
                    <td>{formatDate(player.created_at)}</td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    leaderboard: state.leaderboard
  };
};

export default connect(
  mapStateToProps,
  {
    getLeaderboard: leaderboard
  }
)(Leaderboard);
