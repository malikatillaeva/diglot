import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages';
import LoginPage from './pages/login';
import Dashboard from './components/admin/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<Home />} />
        <Route path="/login" caseSensitive={false} element={<LoginPage />} />
        <Route path="/login/dashboard" caseSensitive={false} element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
