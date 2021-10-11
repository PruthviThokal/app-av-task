export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "CONNECT_DATABASE":
      return action.payload;
    default:
      return state;
  }
};
