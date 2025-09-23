import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router/dom";
import "./App.css";
import './index.css';
import Router from './Main_Childen/Router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Router} />
  </StrictMode>,
)
