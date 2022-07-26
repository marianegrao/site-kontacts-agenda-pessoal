import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainRoutes from './routes.js';
import { BrowserRouter } from "react-router-dom";
import { ContactsProvider } from './contexts/ContactsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContactsProvider>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </ContactsProvider>
);