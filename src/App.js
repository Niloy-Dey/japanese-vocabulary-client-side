import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/routes'; // Import routes
import AuthProvider from './context/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;
