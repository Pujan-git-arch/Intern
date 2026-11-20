import MovieCarousel from '../components/MovieCarousel';
import { moviesData } from '../data/moviesData';


export default function Home(){
    return(

        <MovieCarousel movies={moviesData} />
        

    )
}