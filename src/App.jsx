import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Sidebar/>

      <div className="main-area">
        <Header />
        <main className="main-content">
          <h2>Main Content</h2>
          <p>This area is scrollable...</p>
          <div >More content here...</div>
        </main>
      </div>
    </div>
  );
}

export default App;
