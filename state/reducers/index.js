import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import StyleReducer from "./StyleReducer";
import RouteReducer from "./RouteReducer";
import CashReducer from "./CashReducer";
import UserReducer from "./UserReducer";

const reducer = combineReducers({
  form: formReducer,
  styleState:StyleReducer,
  routeInf:RouteReducer,
  cash:CashReducer,
  userState:UserReducer
})

export default reducer