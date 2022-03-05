import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css'
import ApplyForm from './pages/form/form';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ApplyForm />} />
      </Routes>
    </Router>
  );
};

export default App;
