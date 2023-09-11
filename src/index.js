import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Navbar from './navbar/Navbar.jsx'; // Import the Navbar component
import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Navbar /> {/* Include the Navbar component */}
    <App />
  </StrictMode>
);
