import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  thunk from 'redux-thunk'
import { createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './login';
import AddEntries from './components/addentries';
import ViewEntries from './components/viewentries';
import UpdateDelete from './components/updatedelete';
import UserApp from './UserApp'
import ViewUserProfile from './userprofile';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store=createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=>{
  console.log(store.getState())
})
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/user" element={<UserApp/>}>
        <Route path="/user/profile" element={<ViewUserProfile/>}/>         
        </Route>
        <Route path="/home" element={<App/>}>
          <Route path="/home/view" element={<ViewEntries />}/>
          <Route path="/home/add" element={<AddEntries/>}/>
          <Route path="/home/updatedelete" element={<UpdateDelete/>} />
          <Route path="/home/profile" element={<ViewUserProfile/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
