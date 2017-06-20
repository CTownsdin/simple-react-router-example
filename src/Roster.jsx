import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './FullRoster';
import Player from './Player';

const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)

export default Roster;

// NOTES
// match.params.number

/*
  match.url  -  matched part of the pathname
  match.path  -  route's path
  match.isExact  -  T/F
  match.params  -  obj contain'n vals from the pathname, is :number
*/