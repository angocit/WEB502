import React from 'react';
import './App.css'
import { Route, Routes, useRoutes } from 'react-router-dom';
import List from './conponents/list';
import Add from './conponents/add';
import Edit from './conponents/edit';
import Register from './conponents/register';
import Login from './conponents/login';
function App() {
  const routes = useRoutes([
    {path:'/books',element:<List/>},
    {path:'/books/add',element:<Add/>},
    {path:'/edit/:id',element:<Edit/>},
    {path:'/register',element:<Register/>},
    {path:'/login',element:<Login/>},
  ])
  return routes      
}

export default App
