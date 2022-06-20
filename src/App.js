import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";

function App(){
    return(
        <Router>
            <div className="App">
                <Navbar />
                <div className="content container">
                    <Switch>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/">
                           <Home />
                        </Route>

                    </Switch>
                </div>
             </div>
        </Router>
    )
}
export default App;