import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Findings from './Pages/Findings';
import Analysis from './Pages/Analysis'; // fixed import
// import Control from './Pages/Control'; // Uncomment when Control component is ready

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Findings' element={<Findings />} />
        {/* <Route path='/Control' element={<Control />} /> */}
        <Route path='/Analysis' element={<Analysis />} />
      </Routes>
    </Router>
  );
};

export default App;
