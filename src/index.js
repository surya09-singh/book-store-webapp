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
import Admin from './BookStore/Admin';
import BookModel from './BookStore/BookModel';
import AuthorModel from './BookStore/AuthorModel';
import RackModel from './BookStore/RackModel';
import Category from './BookStore/Category';
import User from './BookStore/User';
import UpdateAdmin from './BookStore/UpdateAdmin';
import ProtectedRoute from './BookStore/ProtectedRoute';
import ProtectedUserRoute from './BookStore/ProtectedUserRoute';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <SetNavbar />
    <Routes>
    <Route exact path='/bookmodel' element={<BookModel/>}/>
    <Route exact path='/Updateadmin' element={<UpdateAdmin/>}/>
    <Route exact path='/register' element={<Register/>}/>
    <Route path='/' element={<Login/>}/>
    <Route exact path='/' element={<ProtectedRoute/>}>
      <Route exact path='/admin' element={<Admin/>}/>
      <Route exact path='/app' element={<App/>}/>
      
      <Route exact path='/authormodel' element={<AuthorModel/>}/>
      <Route exact path='/rackmodel' element={<RackModel/>}/>
      <Route exact path='/category' element={<Category/>}/>
      
      </Route>
      <Route exact path='/' element={<ProtectedUserRoute/>}>
      <Route exact path='/user' element={<User/>}/>
      </Route>
  
     
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
