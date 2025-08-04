import React, { useState } from 'react';
import { useTodo } from '../../Context/TodoContext';
import EditTask from '../model/EditTask';


function TaskCard({ todo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { toggleComplate, deleteTask, updateTask } = useTodo(); 

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const handleEdit = () => {
    setIsEditOpen(true);
    setIsMenuOpen(false);
  };

  const handleDelete = () => {
    deleteTask(todo.id);
    setIsMenuOpen(false);
  };

  const handleCheckboxChange = () => {
    toggleComplate(todo.id);
  };

  const handleSave = (id, title, discription, duration) => {
    updateTask(id, title, discription, duration);
  };

  return (
    <>
      
        <div
          className="grid-item"
          style={{
            display: todo.isComplate ? "none" : "block",
          }}
        >
          <div className='checkbox-more'>
            <div className='checkbox'>
              <input
                type="checkbox"
                checked={todo.isComplate}
                onChange={handleCheckboxChange}
                id={`task-${todo.id}`}
              />
              <label
                htmlFor={`task-${todo.id}`}
                className={todo.isComplate ? 'completed-task' : ''}
              >
                {todo.title}
              </label>
            </div>

            <div className="more-container">
              <button onClick={toggleMenu} className='more'>···</button>
              {isMenuOpen && (
                <div className="menu-dropdown">
                  <button onClick={handleEdit}>Edit</button>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              )}
            </div>
          </div>

          <div className='discription'>{todo.discription}</div>
          <div className='Timeline'>{todo.duration} Hour(s)</div>
        </div>
     

      {isEditOpen && (
        <EditTask
          todo={todo}
          onClose={() => setIsEditOpen(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
}

export default TaskCard;
