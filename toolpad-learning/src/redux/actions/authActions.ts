import {LOGIN,LOGOUT,type Session, type LoginAction, type LogoutAction} from "../types/authTypes"

export const login = (session:Session): LoginAction => {
    return{
        type:LOGIN,
        payload: session,
    }
}

export const logout = (): LogoutAction => {
    return{
        type: LOGOUT
    }
}