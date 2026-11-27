// Movie data structure
export interface Movie{
    id:number;
    title:string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
}
// Movie Redux state
export interface MovieState {
    movies: Movie[];
    loading:boolean;
    error: string | null;
}

export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

//Action interfaces
export interface FetchMoviesRequestAction {
    type: typeof FETCH_MOVIES_REQUEST;
}
export interface FetchMoviesSuccessAction {
    type: typeof FETCH_MOVIES_SUCCESS;
    payload: Movie[];
}
 
export interface FetchMoviesFailureAction {
    type: typeof FETCH_MOVIES_FAILURE;
    payload: string;
}

//Union of all movie actions
export type MovieAction = |FetchMoviesFailureAction | FetchMoviesRequestAction | FetchMoviesSuccessAction



