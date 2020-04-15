////COMBINE REDUCERS
import { combineReducers } from "redux";
import todos from "./todos-reducer";
import visibilityFilter from "./visibility-reducer";
//combining reducers before exporting them to state and back to the client.
export default combineReducers({
  todos,
  visibilityFilter,
});
