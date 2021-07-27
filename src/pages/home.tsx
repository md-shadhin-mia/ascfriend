import React from "react";
import { Button, makeStyles, Typography, Container } from "@material-ui/core";
// import { Container } from "react-dom";
const style = makeStyles({
    homeButtons:{
        margin:"4px"
    }
})

function Home()
{
    const classes = style();
    return (
        <Container>
            <Typography variant="h2">
                Wellcome Friend!
            </Typography>
            <Typography variant="h4" >
                You Have to Access Evething Here.
            </Typography>
            <Button variant="contained" color="primary" className={classes.homeButtons} href="/signup">
                Join Now
            </Button>
            <Button variant="outlined" color="primary" className={classes.homeButtons}>
                Learn More
            </Button>
        </Container>
    )
}

export default Home;