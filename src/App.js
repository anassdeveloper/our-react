import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Footer from './Footer/Footer';
import Services from "./Services/Services";

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
                        <Route path="/our-react">
                            <Home />
                        </Route>
                        <Route path="/services">
                            <Services />
                        </Route>


                    </Switch>
                </div>
                <Footer />
             </div>
        </Router>
    )
}
export default App;