////COMBINE REDUCERS
import { combineReducers } from "redux";
import todos from "./TodosReducer";
import visibilityFilter from "./VisibilityFilter";
//combining reducers before exporting them to state and back to the client.
export default combineReducers({
  todos,
  visibilityFilter,
});
