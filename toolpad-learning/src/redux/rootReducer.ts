import { combineReducers } from "redux";

import authReducer from "./reducers/authReducer";
import movieReducer from "./reducers/movieReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    movie: movieReducer,
})

export default rootReducer;