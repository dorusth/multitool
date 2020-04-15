import React from 'react';
import {Link, Route, Switch} from "react-router-dom";

function Header() {
    return(
        <header>
          <div className="header-top grid-container">
            <a className="logo" href="/"><img src="./img/logo_green_outline.png" alt="KPN logo"/></a>
            <nav>
                <ul>
                    <Link to="/"><li>Overview</li></Link>
                    <Link to="/growth"><li>Persoonlijke Groei</li></Link>
                    <Link to="/skills"><li>Skills</li></Link>
                    <Link to="/profiles"><li>Profielen</li></Link>
                    <Link to="/labs"><li>Learning Labs</li></Link>
                </ul>
            </nav>
            <div className="menu-login">
              <ul>
                <li>username</li> |
                <Link to="#"><li>Uitloggen</li></Link>
              </ul>        
            </div>
          </div>
          <div className="header-bottom grid-container"> 
            <Switch>
              <Route exact path="/">
                <p>Dashboard</p>
              </Route>
              <Route path="/growth">
                <p>Persoonlijke Groei</p>
              </Route>
              <Route path="/skills">
                <p>Skills</p>
              </Route>
              <Route path="/profiles">
                <p>Profielen</p>
              </Route>
              <Route path="/labs">
                <p>Learning Labs</p>
              </Route>
            </Switch>
          </div>
        </header>
    )
}

export default Header;