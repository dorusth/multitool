import React , { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import firebase from './firebase'

import Dashboard from './routes/dashboard'
import Growth from './routes/growth'
import Labs from './routes/labs'
import Profiles from './routes/profiles'
import Skills from './routes/skills'
import Onboarding from './routes/onboarding'

import Header from './global_components/header';

import './style/App.css';


function App(){
  //const [profiles, setProfiles] = useState()
  const [indexedProfiles, setIndexedProfiles] = useState(false)
  
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("profiles").get()
      //setProfiles(data.docs.map(doc => doc.data()))
      let dataProcessed = data.docs.map(doc => doc.data())
      let sets = {}
      dataProcessed.map(item => {
          let profileSets = item.levels.map(level =>{
              let colorList = ["#57A634", "#FFC300", "#FF9900", "#FF3333", "#93117E"]
              let levelColor = colorList[level.level-1]
              return {
                  key: level.level,
                  label: level.level,
                  color: levelColor,
                  values: level
              }
          }) 
          sets[item.profile] = profileSets.reverse()
      });
      setIndexedProfiles(sets);
    }
    fetchData()
  },[])
  
  return(
    <Router>
        <Header />
        <main className="grid-container">
          <Switch>
            <Route exact path="/">
              <Dashboard indexedProfiles={indexedProfiles}/>
            </Route>
            <Route path="/growth">
              <Growth/>
            </Route>
            <Route path="/skills">
              <Skills/>
            </Route>
            <Route path="/profiles">
              <Profiles indexedProfiles={indexedProfiles}/>
            </Route>
            <Route path="/labs">
              <Labs/>
            </Route>
            <Route path="/onboarding">
              <Onboarding />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
      </Router>
  )
}


export default App;