import MovieCard from '../components/MovieCard';
import { moviesData } from '../data/moviesData';
import Grid from '@mui/material/Grid';


export default function Movies(){
    return(
        <>

        <Grid container spacing={2} sx={{ width: { xs: '100%', sm: '100%', md: '100%' } }}>
            {moviesData.map((movie) => (

              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              
                <MovieCard key={movie.id} 
                title={movie.title} 
                releaseYear={movie.releaseYear} 
                description={movie.description} 
                image={movie.image} 
                actors={movie.actors} 
                />
          
              </Grid>
            ))}
          </Grid>
        </>

    )
}