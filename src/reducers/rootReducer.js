import { combineReducers } from "redux";
import displayReducer from "./displayReducer";
import {singleDisplay} from "./displayReducer";
import { registration,  loginData  } from "./reg_logReducer";

const rootReducer = combineReducers({
    displayReducer,
    registration,
    loginData,singleDisplay
})

export default rootReducer;