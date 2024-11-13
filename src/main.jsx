import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './pages/HomePage';
import TripsPage, { loader as tripsLoader } from "./pages/TripsPage";
import './index.css';


const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>
	},
	{
		path: "/trips/:tripID",
		element: <TripsPage/>,
		loader: tripsLoader
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
