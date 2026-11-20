import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function First() {
  return (
    <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom>
          Login
        </Typography>

        <Typography variant="h6" align="left" gutterBottom>
          Email
        </Typography>
        <TextField label=" Email" placeholder="Enter your email" slotProps={{input:{
          disableUnderline: true,

        }}} helperText="We'll never share your email with anyone else." variant="standard" type="email" fullWidth/>
        <Typography variant="h6" align="left" gutterBottom>
          Password
        </Typography>
        <TextField label=" Password " placeholder="Enter your password" helperText="At least 8 characters" variant="outlined" type="password" fullWidth/>

        <Button variant="contained" color="primary" size="large" fullWidth>
          Login
        </Button>
        <Divider variant="middle" />
        <Typography variant="body1" align="center" gutterBottom>
          Don't have an account? 
          <Button variant="text" color="primary">
            Sign up
          </Button>
        </Typography>
    </Container>
  );
}
export default First;