// src/App.js
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import './App.css';

function App() {
  const [view, setView] = useState('dashboard');

  return (
    <div className="App">
      <header className="App-header">
        <h1>AAC App</h1>
        <button onClick={() => setView('dashboard')}>Start Communicating</button>
        <button onClick={() => setView('settings')}>Settings</button>
      </header>
      {view === 'dashboard' ? <Dashboard /> : <Settings />}
    </div>
  );
}

export default App;
