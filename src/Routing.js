import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'
import Check from './containers/Check/Check';
import { Contacts } from './containers/Contacts/Contacts';

// The Roster component matches one of two different routes
// depending on the full pathname
const Routing = () => (
  <Switch>
    <Route exact path='/check' component={Check}/>
    <Route path='/contacts' component={Contacts}/>
    <Route path='/' component={Contacts}/>
  </Switch>
)


export default Routing
