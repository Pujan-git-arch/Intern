import {Typography,TextField,Button,Divider,Card,Box,Checkbox,FormControlLabel, IconButton, Link}  from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { useState, type FormEvent } from "react";

type LoginFormProps = {
    onLogin: () => void;
}


export default function LoginForm( {onLogin}: LoginFormProps){
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe]= useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateEmail = (value: string) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(value)){
            setEmailError("Please enter a valid email");
            return false;
        } else {
            setEmailError("");
            return true
        }
    }

    const handleLogin = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log("1. Form Submitted")
        const isEmailValid = validateEmail(email);
        console.log("2, Email valid:", isEmailValid)

        if (!isEmailValid) return;
        console.log("3. Calling onLogin")

        onLogin();
    }


    return(

        <Card component="form"onSubmit={handleLogin} sx={{display:"flex",flexDirection:"column",p:3,gap:2, maxWidth:{md:500}, width:"100%",alignItems:"center",justifyContent:"center"}} >
            <Typography variant="h5" sx={{textAlign:"center"}}>
                Login
            </Typography>
            <TextField 
                label="Email" 
                value={email} 
                onChange={(e)=> {
                    setEmail(e.target.value);
                    if (emailError) validateEmail(e.target.value);
                  }}
                onBlur={()=>validateEmail(email)}
                error={Boolean(emailError)}
                helperText={emailError}
                fullWidth 
                type="email" 
                placeholder="Enter your Email" />
            <TextField label="Password" fullWidth type={showPassword? "text" :"password"} slotProps={{
                input:{
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <VisibilityOff/>:<Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }
            }} placeholder="Password here" />
            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center", width:"100%" }}>
                <FormControlLabel 
                    control={
                        <Checkbox checked={rememberMe}
                           onChange={(e)=> setRememberMe(e.target.checked)}
                            
                        />
                }
                label="Remember Me"
                />
                <Link href="/forgot-password" underline="hover">
                Forgot Password?
                </Link>

            </Box>
            <Button variant="contained" type="submit" sx={{maxWidth:400,width:"100%"}} >
                Login
            </Button>
            <Divider variant="middle" sx={{width: "100%"}}/>
            <Typography variant="body1" sx={{textAlign:"center"}}  >
                Dont Have an account?
                <Button variant="text">Register</Button>
            </Typography>
    


        </Card>


    );
}