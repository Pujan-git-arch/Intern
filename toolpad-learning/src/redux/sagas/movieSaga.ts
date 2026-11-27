import {call, put, takeLatest} from "redux-saga/effects";

import movieApi from "../../services/movieService";

import {
    fetchMoviesSuccess,
    fetchMoviesFailure,
} from "../actions/movieActions";

import {
    FETCH_MOVIES_REQUEST
} from "../types/movieTypes";

function* fetchMoviesWorker(): Generator<any, void, any> {
    try{
        // Call TMDB API

        const response = yield call(
            movieApi.get,
            "/movie/popular"
        );

        yield put (
            fetchMoviesSuccess(response.data.results)
        );

    } catch (error){
        yield put(
            fetchMoviesFailure("Failed to Fetch Movies")
        );
        console.error("Movie API Error:", error)
    }
}


export function* watchFetchMovies() {
    yield takeLatest(
        FETCH_MOVIES_REQUEST,
        fetchMoviesWorker
    );
}