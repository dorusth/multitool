import React , { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import firebase from './firebase'

import Dashboard from './routes/dashboard'
import Growth from './routes/growth'
import Labs from './routes/labs'
import Profiles from './routes/profiles'
import Skills from './routes/skills'

import Header from './global_components/header';

import './style/App.css';


function App(){

  const [dataRecieved, setDataRecieved] = useState(false)
  const [profiles, setProfiles] = useState()
  
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("profiles").get()
      setProfiles(data.docs.map(doc => doc.data()))
      setDataRecieved(true)
    }
    fetchData()
  })
  console.log("help");
  
  return(
    <Router>
        <Header />
        <main className="grid-container">
          <Switch>
            <Route exact path="/">
              <Dashboard profiles={profiles}/>
            </Route>
            <Route path="/growth">
              <Growth/>
            </Route>
            <Route path="/skills">
              <Skills/>
            </Route>
            <Route path="/profiles">
              <Profiles profiles={profiles} fetched={dataRecieved}/>
            </Route>
            <Route path="/labs">
              <Labs/>
            </Route>
          </Switch>
        </main>
      </Router>
  )
}


export default App;
