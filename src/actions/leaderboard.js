export const leaderboard = () => async dispatch => {
  const API_URL = process.env.REACT_APP_API_URL;
  const leaderboard = await fetch(`${API_URL}/leaderboard`).then(
    leaderboard => {
      return leaderboard.json();
    }
  );

  dispatch({ type: "GET_LEADERBOARD", payload: leaderboard });
};
