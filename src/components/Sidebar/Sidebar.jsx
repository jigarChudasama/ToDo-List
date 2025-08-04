import React from 'react';
import { useTodo } from '../../Context/TodoContext';

function Sidebar() {

  const { todo } = useTodo()

  return (
    <aside className="sidebar bordeer-right">
      <div className='img' >
        <img src="\icons\logo.svg" alt="" /> <span className='text' >DailyDo</span>
      </div>
      <div className="faq-section">
        <details className="faq-item" open >
          <summary>Task Overview</summary>
          <ul>
            {todo.length === 0 ? (
              <li>No tasks available</li>
            ) : (
              todo.map((todo) => (
                <li key={todo.id}>
                  {todo.title}
                  {todo.isComplate && <span style={{ color: 'green' }}> ✔</span>}
                </li>
              ))
            )}
          </ul>
        </details>
      </div>


    </aside>
  );
}

export default Sidebar;
