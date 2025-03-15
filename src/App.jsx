import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 🔥 No usar BrowserRouter aquí
import Form from './components/Form';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
