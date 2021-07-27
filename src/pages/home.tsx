import React from "react";
import { Button, makeStyles, Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
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
            <Button variant="contained" color="primary" component={Link} className={classes.homeButtons} to="/signup">
                Join Now
            </Button>
            <Button variant="outlined" color="primary" component={Link} to="lean-more" className={classes.homeButtons}>
                Learn More
            </Button>
        </Container>
    )
}

export default Home;