import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "../redux/store";
import { fetchMoviesRequest } from "../redux/actions/movieActions";

import MovieCard from "../components/MovieCard";
import Grid from "@mui/material/Grid";

export default function Movies() {

    const dispatch = useDispatch<AppDispatch>();

    // Read movie state from Redux
    const { movies, loading, error } = useSelector(
        (state: RootState) => state.movie
    );

    // Fetch movies when the page mounts
    useEffect(() => {
        dispatch(fetchMoviesRequest());
    }, [dispatch]);

    // Loading state
    if (loading) {
        return <h2>Loading movies...</h2>;
    }

    // Error state
    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <Grid
            container
            spacing={2}
            sx={{ width: { xs: "100%", sm: "100%", md: "100%" } }}
        >
            {movies.map((movie) => (
                <Grid
                    size={{ xs: 12, sm: 6, md: 4 }}
                    key={movie.id}
                >
                    <MovieCard
                        title={movie.title}
                        releaseYear={
                            movie.release_date
                                ? new Date(movie.release_date).getFullYear()
                                : 0
                        }
                        description={movie.overview}
                        image={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : ""
                        }
                        actors={[]}
                    />
                </Grid>
            ))}
        </Grid>
    );
}