// main.tsx
// This file is the base file for the webpage. All this file does is tell the DOM to render the page and call the App.tsx file.

// Imports needed for page rendering.
import 'bootstrap/scss/bootstrap.scss' // Bootstrap's styling and theme. Uses Sass instead of CSS for typography and styling.
import './index.css' // CSS file for main.tsx
import React from 'react' // React plugin to render HTML and JSX together.
import ReactDOM from 'react-dom/client' // According to npmjs.com, "This package serves as the entry point to the DOM and server renderers for React."
import App from './App.tsx' // This file contains the layout of the webpage and sets the proper routing and component configuration.


// Dynamically renders the webpage, very useful for debugging quick changes as well.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> {/* Calls App function from App.tsx. */}
  </React.StrictMode>,
)
