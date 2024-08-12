import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import { Toaster, toast } from "sonner";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster richColors position="top-center" />
    <App />
  </BrowserRouter>
);
