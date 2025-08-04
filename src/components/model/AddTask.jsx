import React from 'react';


function AddTask({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        <h2>Add Task</h2>
        <form action="">
            <input type="text" placeholder='Task Name' className='add-task-input' />
            <input type="text" placeholder='Task Description' className='add-task-input' />
            <input type="text" placeholder='Time (Hours) ' className='add-task-input' />

            <button className='add-model-btn' >Add task</button>
            <button className='cancle-model-btn' onClick={onClose} >Cancle</button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;