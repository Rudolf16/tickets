import React from 'react';
import Navbar from './components/Navbar'
import {Home} from './components/Home'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import AboutTicket from './components/AboutTicket'
import { Title } from './components/Title';

const App=()=>{

  return(
      <BrowserRouter>
        <Title/>
        <div className='main-content'>
        <Navbar/>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/:id' component={AboutTicket}/>
        </Switch>
        </div>
      </BrowserRouter>
  );
}


export default App;

