// import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import AlertComponent from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('dark');
  const [alertState, setAlertState] = useState(null);

  const showAlert = (message, type) => {
    setAlertState({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlertState(null);
    }, 1500);
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? 'grey' : 'white';
    const modeMessage = newMode === 'dark' ? 'Dark mode has been enabled' : 'Light mode has been enabled';
    showAlert(modeMessage, 'success');
    document.title = `MyWebsite - ${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode`;
  };

  return (
    <Router>
      <Navbar title="My Website" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <AlertComponent alert={alertState} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
