import type {Navigation} from '@toolpad/core/AppProvider';
import MovieIcon from '@mui/icons-material/Movie';
import PersonIcon from '@mui/icons-material/Person';


export const NAVIGATION: Navigation =[
  {
    kind: 'header',
    title: 'Main Menu',

  }, 
  {
    kind: 'header',
    title: 'Movies',
  },
  {
    segment: 'movies',
    title: 'Movies',
    icon: <MovieIcon />,
  },
  {
    segment: 'actors',
    title: 'Actors',
    icon: <PersonIcon />,
  },

]