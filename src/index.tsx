import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "./css/style.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Ticket} from "./ts/ticket"



const getTest=async()=>{
  const testData=await fetch('https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json');
  const dataRemaded=await testData.json();
  return dataRemaded;
}
getTest().then(res=>{
  const reducer=(tickets:Ticket[]=[...res])=>{
    return tickets;

  }
  const state=createStore(reducer);

  ReactDOM.render(
    <Provider store={state}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
  reportWebVitals();

}).catch(err=>{console.log(err)})