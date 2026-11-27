import {all, fork} from "redux-saga/effects";

import { watchFetchMovies } from "./movieSaga";


export default function * rootSaga() {
    console.log("Root Saga started!");

    yield all([
        fork(watchFetchMovies),
    ]);
}