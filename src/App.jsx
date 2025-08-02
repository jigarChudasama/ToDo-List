import React, { useEffect, useState } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import TaskCard from './components/TaskCard/TaskCard';

library.add(faUser)

function App() {

  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const day = date.getDate().toString().padStart(2, '0');
      const month = date.toLocaleString('en-US', { month: 'short' });
      const year = date.getFullYear();
      setFormattedDate(`${day}, ${month} ${year}`);
    };

    updateDate(); // set once on load

    const interval = setInterval(updateDate, 1000 * 60); // update every minute (optional)
    return () => clearInterval(interval); // cleanup
  }, []);


  return (
    <div>
      <Sidebar />
      <div className="main-area">
        <Header />

        <main className="main-content">

          <div className='search-bar'>
            <div className='date' >
              {formattedDate}
            </div>
            <div className='search-and-addList' >
              <div className='input' >
                <input type="text" name="search-task" placeholder='Search Task' id="" />
              </div>
              <div className='add-btn' >
                <button className='btn' >add new list</button>
              </div>
            </div>
          </div>

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
