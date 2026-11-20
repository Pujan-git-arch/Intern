import { useState } from "react";
import {Box, Typography, Card, CardMedia,Button, IconButton} from '@mui/material';
import  type {MovieItem} from '../data/moviesData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type MovieCarouselProps = {
    movies: Omit<MovieItem, 'id' | 'description'>[];
};

export default function MovieCarousel({ movies }: MovieCarouselProps) {

        const [currentIndex, setCurrentIndex] = useState(0);

        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex+1) % movies.length);
        };

        const handlePrev = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
        }
        const currentMovie = movies[currentIndex];



        return(
            <Card sx={{display:"flex",flexDirection:"column",overflow: "hidden"}}>
                <CardMedia
                    component="img"
                    image={currentMovie.image}
                    alt={currentMovie.title}
                    sx={{height:{xs: 200, md: 400}, width: '100%', objectFit: 'cover', borderRadius: 1, '&:hover':{transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out'}}}
            
                />

                <Box sx={{display:"flex", flexDirection:"column", p:3, color: 'primary', width:"100%",justifyContent:"center" }}>
                    <Typography variant="h4">{currentMovie.title}({currentMovie.releaseYear})</Typography>
                    <Typography variant="subtitle1">Starring: {currentMovie.actors.join(', ')}</Typography>
                    

                    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <IconButton onClick={handlePrev} sx={{flexGrow:1}} >
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Button  variant="contained"  color="primary" sx={{flexGrow:3}}>Explore Movie</Button>
                        <IconButton onClick={handleNext} sx={{flexGrow:1}}>
                            <ArrowForwardIosIcon />
                        </IconButton>

                    </Box>




                </Box>

                

                
            </Card>
            
        )

    
}
