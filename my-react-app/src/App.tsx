import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ButtonGroup from '@mui/material/ButtonGroup';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Button variant="contained" disableElevation color="primary">
        Click Me
      </Button>
      <Button variant="contained" onClick={() => {
        alert("Button clicked!");
      }}  color="warning">
        Click Me
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined Button
      </Button>
      <Button variant="text" color="success">
        Text Button
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>

      <ButtonGroup variant="contained" orientation="vertical" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;