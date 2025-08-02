import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar bordeer-right">
      <div className='img' >
        <img src="\icons\logo.svg" alt="" /> <span className='text' >TODO</span>
      </div>
      <div class="faq-section">
        <details class="faq-item">
          <summary>Todo List</summary>
          <ul>
            <li>team meeting</li>
            <li>team meeting</li>
            <li>team meeting</li>
            <li>team meeting</li>
            <li>team meeting</li>
            <li>team meeting</li>
            <li>team meeting</li>
            <li>team meeting</li>
            <li>team meeting</li>
            <li>team meeting</li>
            
          </ul>
        </details>
      </div>


    </aside>
  );
}

export default Sidebar;
