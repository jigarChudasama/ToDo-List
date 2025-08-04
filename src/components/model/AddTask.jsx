import React, { useState } from 'react';
import { useTodo } from '../../Context/TodoContext';

function AddTask({ open, onClose }) {
  const { addTask } = useTodo();

  const [title, setTitle] = useState('');
  const [discription, setDiscription] = useState('');
  const [duration, setDuration] = useState('');

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !discription.trim() || !duration.trim()) {
      alert('Please fill all fields');
      return;
    }

    addTask(title, discription, duration);

    setTitle('');
    setDiscription('');
    setDuration('');

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
       
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Name"
            className="add-task-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Task Description"
            style={{height:100}}
            className="add-task-input"
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Time (Hours)"
            className="add-task-input"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />

          <button type="submit" className="add-model-btn">
            Add Task
          </button>
          <button
            type="button"
            className="cancle-model-btn"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
