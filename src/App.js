import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
