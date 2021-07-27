import React, { FormEvent, useState } from "react";
import {Avatar, Button, Container, makeStyles, TextField, Theme, Typography} from "@material-ui/core";
import { LockOpenOutlined } from "@material-ui/icons";
import firebase from "firebase";


const styles = makeStyles((theme:Theme)=>{
    return ({
        root:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        },
        avater:{
            backgroundColor: theme.palette.secondary.main,
            width:"64px",
            height:"64px"
        },
        form:{
            marginTop:theme.spacing(1),
            display:"flex",
            width:"100%",
            flexDirection:"column"
        },
        submit:{
            marginTop:theme.spacing(1),

        }
    })
})
export default function Signin()
{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const classes = styles();
    const submitHandelar = (e:FormEvent)=>{
        e.preventDefault();
        if(email && password)
        {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(userCredential=>{
                //login
                let user= userCredential.user;
                console.log(user);
            }).catch(error=>{
                console.error({error});
            })
        }
    }
    return (
        <Container maxWidth="xs">
            <div className={classes.root}>
                <Avatar className={classes.avater}>
                    <LockOpenOutlined />
                </Avatar>
                <Typography variant="h3" component="h2">
                    Sign In
                </Typography>
                <form noValidate onSubmit={submitHandelar} className={classes.form}>
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        type="email" 
                        label="Email"
                        required
                        id="email" value={email} 
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        type="password" 
                        label="password"
                        required
                        id="password" value={password} 
                        onChange={e=>setPassword(e.target.value)}
                    />
                    <Button variant="contained" type="submit" color="primary" className={classes.submit}>
                        Sign In
                    </Button>
                </form>
                <Button variant="text" color="primary">
                    haven't account? Sign UP.
                </Button>
            </div>
        </Container>
    )
}