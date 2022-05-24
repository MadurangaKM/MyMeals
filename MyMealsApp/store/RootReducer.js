import { combineReducers } from "redux";
import DarkLightModeChangerData from "./common-reducers/DarkLightModeReducer";
import CategoryData from "./common-reducers/CategoryData";

const rootReducer = combineReducers({
  DarkLightModeChangerData,
  CategoryData,
});

export default rootReducer;
