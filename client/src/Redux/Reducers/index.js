import { combineReducers } from "redux";

import  UserReducer  from "./UserReducer";
import RdvReducer from "./RdvReducer";
const rootReducer=combineReducers({UserReducer, RdvReducer})


export default rootReducer
