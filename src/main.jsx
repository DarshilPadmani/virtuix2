import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App.jsx";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import Blog from './pages/Blog.jsx';

// Render the application
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <App />    {/* Main application component */}
      <About />
      <Projects />
      <Contact />
      {/* <Blog /> */}
    </>
  </React.StrictMode>
);
