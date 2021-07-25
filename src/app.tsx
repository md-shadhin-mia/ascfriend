import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./pages/home";

function App(){
    return (
        <BrowserRouter>
            <Switch>
               <Route path="/">
                   <Home />
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