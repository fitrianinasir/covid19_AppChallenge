import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
