import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import { store,persistor } from './BookStore/Store';
import App from './App';
import {Provider} from "react-redux";
import Login from './BookStore/Login';
import SetNavbar from './BookStore/Navbar';
import Register from './BookStore/Register';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate, } from 'redux-persist/integration/react'
import Dashboard from './BookStore/Dashboard';
import BookModel from './BookStore/BookModel';
import AuthorModel from './BookStore/AuthorModel';
import RackModel from './BookStore/RackModel';
import Category from './BookStore/Category';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <SetNavbar />
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/bookmodel' element={<BookModel/>}/>
      <Route path='/authormodel' element={<AuthorModel/>}/>
      <Route path='/rackmodel' element={<RackModel/>}/>
      <Route path='/category' element={<Category/>}/>
     
    </Routes>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
