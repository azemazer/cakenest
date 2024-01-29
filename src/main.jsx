import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './views/Login.jsx';
import OrderPage from './views/OrderPage.jsx';
import Error404 from './views/Error404.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error404 />
  },
  {
    path: "/commande",
    element: <OrderPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
