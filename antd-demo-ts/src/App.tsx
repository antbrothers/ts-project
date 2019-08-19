import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Layouts from './layouts/index'
const App: React.FC = () => {
  return (    
    <Router>
      <Layouts />
    </Router>
  );
}

export default App;
