import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const startTest=async()=>{
  const testData=await fetch('https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json');
  const dataRemaded=await testData.json();
  return dataRemaded;
}
startTest().then(res=>{
  const reducer=(state=[...res])=>{
    return state

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