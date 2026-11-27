import type { Movie } from "../types/movieTypes";

import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from "../types/movieTypes";
// Request action

export const fetchMoviesRequest = (): {
    type: typeof FETCH_MOVIES_REQUEST;
}=> ({
    type: FETCH_MOVIES_REQUEST,

});

export const fetchMoviesSuccess = ( movies:Movie[]) => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
})


// Failure action
export const fetchMoviesFailure = (error: string) => ({
    type: FETCH_MOVIES_FAILURE,
    payload: error,
});