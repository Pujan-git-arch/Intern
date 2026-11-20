import LoginForm from "../components/LoginForm";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";

type LoginProps ={
  onLogin: () => void;

  

    user: {
     email: string;
     password: string;
     name: string;
     image: string;
   };


  
}

export default function Login( {onLogin,user}: LoginProps){

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("4. Login callback received");

    onLogin();
    console.log("5. Navigating to dashboard");
    navigate("/")
  };


    return(
        <Box
          sx={{
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"100vh"
          }}>
            <LoginForm onLogin={handleLogin} user={user}/>

        </Box>
    
    );
}