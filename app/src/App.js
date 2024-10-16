// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import UploadScreen from './screens/UploadScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/upload" element={<UploadScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
