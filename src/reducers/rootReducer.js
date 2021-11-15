import { combineReducers } from "redux";
import displayReducer from "./displayReducer";
import { registration,  loginData  } from "./reg_logReducer";

const rootReducer = combineReducers({
    displayReducer,
    registration,
    loginData 
})

export default rootReducer;