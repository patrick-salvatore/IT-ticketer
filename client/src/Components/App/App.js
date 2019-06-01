import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Navbar from "../Navbar/Navbar"
import DashBoard from '../Dashboard/DashBoard';
import SignIn from '../Auth/SignIn';
import NewForm from '../Forms/Containers/NewForm'
import Questionnaire from '../Forms/Containers/Questionnaire'
import Summary from '../Forms/Containers/Summary'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component = {DashBoard}></Route>
        <Route path='/signin' component = {SignIn}></Route>
        <Route path='/newform' component = {NewForm}></Route>
        <Route path='/questionnaire' component = {Questionnaire}></Route>
        <Route path='/summary' component = {Summary}></Route>
      </Switch>
    </div>
  );
}

export default App;
