import { createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout';
import Login from './Login';
import Error from './Error';

const appRouter=createBrowserRouter(createRoutesFromElements(
  <Route errorElement={<Error/>}>
  <Route path='/' element={<Login/>}/>
  <Route path='/repository' element={<Layout/>}/>
  </Route>
))


export default appRouter;
