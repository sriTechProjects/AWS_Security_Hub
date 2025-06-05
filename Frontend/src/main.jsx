import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Findings from './Pages/Findings.jsx';
import Analysis from './Pages/Analysis.jsx'; // ✅ Make sure extension is .jsx

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/findings",
    element: <Findings />
  },
  {
    path: "/analysis",
    element: <Analysis /> // ✅ This solves the 404
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
