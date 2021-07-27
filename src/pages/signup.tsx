import {Container, Typography, TextField, Button, Theme, makeStyles, Avatar} from "@material-ui/core"
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import firebase from "firebase";
import React, { FormEvent, useState } from "react"
import { Link } from "react-router-dom";

const styles = makeStyles((theme:Theme)=>(
{
    root:{
        marginTop:theme.spacing(2),
        display:"flex",
        flexDirection: "column",
        alignItems:"center"
    },
    avaIcon:{
        backgroundColor:theme.palette.secondary.main,
        width:"64px",
        height: "64px"
    },
    formStyle: {
        width:"100%",
        display:"flex",
        flexDirection:"column",
        // alignItems:"center",
        marginTop:theme.spacing(2),
    },
    submitStyle:{
        marginTop:theme.spacing(1)
    }
}
));
export default function Signup(){
    const classes = styles()
    const [email, setEmail] = useState<string>("");
    const [emailErr, setEmailErr] = useState<string | boolean>(false);
    const [newPassword, setNewPassword] = useState<string>("");
    const [newPasswordErr, setNewPasswordErr] = useState<string | boolean>(false);
    const [repeatPassword, setRepeatPassword] = useState<string>("");
    const [repeatPasswordErr, setRepeatPasswordErr] = useState<string | boolean>(false);
    
    const submitHandelar = (e:FormEvent)=>{
        e.preventDefault()
        // services Handelar 
        if(email && newPassword && repeatPassword)
        {
            console.log({email, newPassword, repeatPassword});
            if( newPassword ==  repeatPassword)
            {
                firebase.auth().createUserWithEmailAndPassword(email, newPassword)
                .then(userCredential=>{
                    let user = userCredential.user;
                    console.log(user);
                })
                .catch(error=>{
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(error);
                })
            }
        }
    }
    return (
        <Container maxWidth="xs">
            <div className={classes.root}>
                <Avatar className={classes.avaIcon}>
                    <PersonAddSharpIcon />
                </Avatar>
                <Typography component="h2" variant="h3" >
                    Sign Up
                </Typography>
                <form noValidate className={classes.formStyle} onSubmit={submitHandelar}>
                    <TextField 
                        label="Email" 
                        margin="normal"
                        variant="outlined"
                        required
                        autoComplete="email"
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                     />

                    <TextField 
                        label="New Password" 
                        margin="normal"
                        variant="outlined"
                        type="password"
                        required
                        autoComplete="new-password"
                        value={newPassword} 
                        onChange={(e)=>setNewPassword(e.target.value)}/>
                    <TextField 
                        label="Repeat Password" 
                        margin="normal"
                        variant="outlined"
                        type="password"
                        required
                        autoComplete="new-password"
                        value={repeatPassword} 
                        onChange={(e)=>setRepeatPassword(e.target.value)} />
                    <Button className={classes.submitStyle} variant="contained" color="primary" type="submit">
                        Sign up
                    </Button>
                </form>
                <div>
                    <span>Already Have an Account? </span>
                    <Link to="signin">
                        Signin
                    </Link>
                </div>
            </div>
        </Container>
    )
}