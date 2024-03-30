import './App.css';

//Routes
import UniversalLayout from './layouts/UniversalLayout';  // Layout
import Home from './components/Home';
import Menu from './components/Menu';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<UniversalLayout/>}>
    <Route index element={<Home/>}/>
      <Route path ='/menu' element={<Menu/>}/>
    </Route>     
  )
)

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
