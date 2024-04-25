import React from "react";
import { Home } from "../pages/Home";
import {About } from "../pages/About";
import { Communities } from "../pages/Communities";
import { Contact } from "../pages/Contact";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Start } from "../pages/Start";
import LoginPage from "../pages/LoginPage"; 
import {PropertyDetails} from "../pages/PropertyDetails";

export const Routes =() => {
    return (
        <Router>
            <Switch>
            <Route path="/" exact component={Start} />   
            <Route path="/Home">
                <Home />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/Communities">
                <Communities />
            </Route>
            <Route path="/Contact">
                <Contact />
            </Route>
            <Route path="/LoginPage">
                <LoginPage />
            </Route>
            <Route path="/PropertyDetails">
                <PropertyDetails />
            </Route>
            </Switch>
        </Router>
    )
}

