import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/routes'; // Import routes


function App() {
  return (
    <Router>
      <div className="">
        <AppRoutes />

      </div>
    </Router>
  );
}

export default App;
