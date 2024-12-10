import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/routes'; // Import routes
import Navbar from './Component/Shared/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Render Navbar across all routes */}
        <AppRoutes /> {/* Render routes */}
      </div>
    </Router>
  );
}

export default App;
