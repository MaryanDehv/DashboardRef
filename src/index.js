import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import ErrorPage from './Route/ErrorPage';
import Home from './Components/view/home/main_view/Home';
import Notifications from './Components/view/Notifications/main_view/Notications';
import App from './App';

const router = createBrowserRouter([
  {
    path: process.env.PUBLIC_URL,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: process.env.PUBLIC_URL,
        element: <Home />
      } , 
      {
        path: process.env.PUBLIC_URL + "/notifications",
        element: <Notifications />
      }
    ]
  }
]);

console.log(process.env.PUBLIC_URL)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
