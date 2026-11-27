import { type MovieState, type MovieAction, FETCH_MOVIES_FAILURE,FETCH_MOVIES_REQUEST,FETCH_MOVIES_SUCCESS } from "../types/movieTypes";

// Initial movie state

const initialState: MovieState = {
    movies:[],
    loading: false,
    error:null,
}

const movieReducer = (
    state: MovieState = initialState,
    action: MovieAction
): MovieState => {

    switch (action.type){
        case FETCH_MOVIES_REQUEST:
            return{
                ...state,
                loading:true,
                error: null,
            };
        case FETCH_MOVIES_SUCCESS:
            return{
                ...state,
                loading: false,
                movies: action.payload,
                error:null,
            }

        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default movieReducer;