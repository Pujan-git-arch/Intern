import {
    LOGIN,
    LOGOUT,
    type AuthState,
    type AuthAction,
} from "../types/authTypes";

const initialState : AuthState = {
    session:null,
};

const authReducer = (
    state: AuthState = initialState,
    action: AuthAction,
): AuthState => {
    switch (action.type){
        case LOGIN:
            return{
                ...state,
                session: action.payload,
            };

        case LOGOUT:
            return {
                ...state,
                session:null,
            };
            
        default: return state;
    }
}
export default authReducer