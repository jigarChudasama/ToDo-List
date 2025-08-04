import React, { useEffect, useState } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import TaskCard from './components/TaskCard/TaskCard';
import SearchBar from './components/SearchBar';

library.add(faUser)

function App() {

 

  return (
    <div>
      <Sidebar />
      <div className="main-area">
        <Header />

        <main className="main-content">

          <SearchBar/>

          <div className='toggle-btn' >
            <button className='active-btn' >Active Task</button>
            <button className='complate-btn' >Complated</button>
          </div>          
            <TaskCard />
        </main>
      </div>
    </div>
  );
}

export default App;
