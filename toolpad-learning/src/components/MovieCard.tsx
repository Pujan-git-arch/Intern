import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type {MovieItem} from '../data/moviesData'
import { Box, Chip} from '@mui/material';

type MovieCardProps = Omit<MovieItem, 'id'> 
export default function MovieCard({ title,releaseYear,description,image,actors, }: MovieCardProps) {
  return (
    <Card sx={{ width: '100%', height: 420, display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        sx={{ height: 140  }}
        image={image}
        title={title}
      />
      <CardContent sx={{ flexGrow: 1, overflow: "hidden" }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 , '&:hover':{bgcolor: 'primary.dark', borderRadius: 1} }}>
          {title} ({releaseYear})
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ color: 'text.secondary',display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',  }}>
          {description}
        </Typography>
        { actors && actors.length > 0 && (
          <>
          
          <Typography variant="subtitle2"  sx={{ color: 'text.secondary' ,mb:1, fontWeight: 'bold'}}>
            Starring:
          </Typography>
          <Box sx={{ display:'flex' , flexWrap: 'wrap', gap:0.5}}>
            {actors.slice(0,2).map((actor) => (
              <Chip key={actor} label={actor} size="small" color="primary" variant="outlined" />
            ))}
          {actors.length > 2 && (
              <Chip
                label={`+${actors.length - 2} more`}
                size="small"
                color="primary"
              />
            )}
        </Box>
          </>
        )}
      </CardContent>
      <CardActions sx={{mt: 'auto'}}>
        <Button size="small" variant='contained' sx={{ '&:hover': { bgcolor: 'primary.light' } }}>Watch Trailer</Button>
        <Button size="small" variant='outlined' sx={{ '&:hover': { bgcolor: 'primary.light' } }}>Details</Button>
      </CardActions>
    </Card>
  );
}
