import combineReducers from "./combineReducers";
import leftReducer from "./leftReducer";
import rightReducer from "./rightReducer";

/** using combineReducers */
const rootReducer = combineReducers({
  left: leftReducer,
  right: rightReducer
});

export default rootReducer;
