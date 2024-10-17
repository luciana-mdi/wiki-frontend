import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import UploadScreen from './screens/UploadScreen';
import LoadingScreen from './screens/LoadingScreen'; // Import the new loading screen

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/upload" element={<UploadScreen />} />
        <Route path="/loading" element={<LoadingScreen />} /> {/* New loading route */}
      </Routes>
    </Router>
  );
}

export default App;
