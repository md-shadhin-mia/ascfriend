import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin"

function App(){
    return (
        <BrowserRouter>
            <Switch>
               <Route exact path="/">
                   <Home />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/signin">
                    <Signin />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}


let appContend = document.querySelector("#main-app")
if(appContend)
{
    ReactDOM.render(<App/>, appContend);
}