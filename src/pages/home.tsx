import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
const style = makeStyles({
    homeButtons:{
        margin:"4px"
    }
})

function Home()
{
    const classes = style();
    return (
        <div>
            <Typography variant="h2">
                Wellcome Friend!
            </Typography>
            <Typography variant="h4" >
                You Have to Access Evething Here.
            </Typography>
            <Button variant="contained" color="primary" className={classes.homeButtons}>
                Join Now
            </Button>
            <Button variant="outlined" color="primary" className={classes.homeButtons}>
                Learn More
            </Button>
        </div>
    )
}

export default Home;