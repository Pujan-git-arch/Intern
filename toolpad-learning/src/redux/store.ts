import {createStore} from "redux";

import authReducer from "./reducers/authReducer";

const store = createStore(authReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;