import { combineReducers } from "redux";
import data from "./data.reducer";
import employees from "./employees.reducer";
import style from "./style.reducer";

export default combineReducers({
    data,
    employees,
    style,
});
