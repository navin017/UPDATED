import './app.css';
import {Header} from './container/header';
// import {ProductDetails} from './container/productDetails'
import { Login } from './login';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
function App() {
  const route = createBrowserRouter([
    {path:'/login',element:<Login/>},
    {path:'/user',element:<Header/>},
  ])
  return (
    <>
    <div className="App">
   
    </div>
    
     <RouterProvider router = {route}>
     
     </RouterProvider>
    </>
  );
}

export default App;
