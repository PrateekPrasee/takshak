import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Side from './components/Sidebars';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Side isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </Router>
  );
}

export default App;
