import './App.css';
import Home from './Component/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Contact from './Component/Contact/Contact';
import Main from './Component/Main/Main';
import Category from './Component/Category/Category';
import AddProduct from './Component/AddProduct/AddProduct';

import 'preline/dist/preline';
import Products from './Component/Products/Products';
import Customers from './Component/Customers/Customers';
import Customerdetails from './Component/Customerdetails/Customerdetails';
import Orders from './Component/Orders/Orders';
import Orderdetails from './Component/Orderdetails/Orderdetails';
import Notifications from './Component/Notifications/Notifications';
import Chat from './Component/Chat/Chat';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/addproduct', element: <AddProduct /> },
        { path: '/products', element: <Products /> },
        { path: '/customers', element: <Customers /> },
        { path: '/customerdetails', element: <Customerdetails /> },
        { path: '/orders', element: <Orders /> },
        { path: '/orderdetails', element: <Orderdetails /> },
        { path: '/contact', element: <Contact /> },
        { path: '/category', element: <Category /> },
        { path: '/notifications', element: <Notifications /> },
        { path: '/people-list', element: <Chat /> },
        { path: '/chat', element: <Chat /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
