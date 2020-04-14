import React from 'react';
// import Header from './global_components/header';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import firebase from './firebase'
import Dashboard from './routes/dashboard'
import Growth from './routes/growth'
import Labs from './routes/labs'
import Profiles from './routes/profiles'
import Skills from './routes/skills'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={dataRecieved:false}
  }
  
  componentDidMount(){
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("profiles").get()
      this.setState({profiles:data.docs.map(doc => doc.data()), dataRecieved:true})
    }
    fetchData()
  }

  render(){
    return (
      <Router>
        <header>
          <div className="header-top grid-container">{// eslint-disable-next-line
          }<a className="logo" href="#"><img src="./img/logo_green_outline.png" alt="KPN logo"/></a>
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
        <main className="grid-container">
          <Switch>
            <Route exact path="/">
              <Dashboard profiles={this.state.profiles}/>
            </Route>
            <Route path="/growth">
              <Growth/>
            </Route>
            <Route path="/skills">
              <Skills/>
            </Route>
            <Route path="/profiles">
              <Profiles profiles={this.state.profiles} fetched={this.state.dataRecieved}/>
            </Route>
            <Route path="/labs">
              <Labs/>
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
