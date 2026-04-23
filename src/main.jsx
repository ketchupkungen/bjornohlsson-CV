/**
 * main.jsx - React entry point
 * 
 * This file is the bootstrap file for the React application.
 * It renders the root App component into the DOM element with id="root" (defined in index.html).
 * React.StrictMode enables additional development checks and warnings.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Find the root DOM element and render the App component into it
// React.StrictMode helps detect potential issues in the app during development
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
