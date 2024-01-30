import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import bgPicture from './assets/tarts.jpg';
import styled, { css } from 'styled-components';

import Login from './views/Login.jsx';
import OrderPage from './views/OrderPage.jsx';
import Error404 from './views/Error404.jsx'
import Navbar from './components/Navbar.jsx';

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

const MainStyle = styled.div`
  background-image: url(${bgPicture});
  height: 100vh;
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainStyle>
      <Navbar />
      <RouterProvider router={router} />
    </MainStyle>
  </React.StrictMode>
)