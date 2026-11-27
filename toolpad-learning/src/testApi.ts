
import movieApi from "./services/movieService";

async function testMovieApi() {
  try {
    const response = await movieApi.get("/movie/popular");

    console.log("TMDB API connected!");
    console.log("Popular movies:", response.data.results);
  } catch (error) {
    console.error("TMDB API error:", error);
  }
}

testMovieApi();
