import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar bordeer-right">
        <div className='img' >
          <img src="\icons\logo.svg" alt="" /> <span className='text' >TODO</span>
        </div>
        <ul>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </aside>
  );
}

export default Sidebar;
