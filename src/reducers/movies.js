export default (state = [], action) => {
    console.log(action);
  switch (action.type) {
    case "SET_MOVIES":
      return action.movies;
    default:
      return state;
  }
};
