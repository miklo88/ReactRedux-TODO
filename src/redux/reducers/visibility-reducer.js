import { VisibilityFilters } from "../actions/action-creator";
// visibilityFilter is passing the state and SHOW ALL  and action as params/args. switch case is handing the logic of rendering ALL actions and updating state.
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
