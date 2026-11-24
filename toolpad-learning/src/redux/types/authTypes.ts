export interface User{
    name:string;
    email: string
    image: string
}

export interface Session {
    user: User;
}

export interface AuthState{
    session: Session | null;
}

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export interface LoginAction {
    type: typeof LOGIN;
    payload: Session
}

export interface LogoutAction{
    type: typeof LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction