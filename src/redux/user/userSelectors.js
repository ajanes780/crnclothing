import { createSelector } from "reselect";

const selectUser = (state) => state.user;

// create selector works as a HOC thats takes in state as a
//  array or arguments and allows up to pull off the values from the state object we want
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
