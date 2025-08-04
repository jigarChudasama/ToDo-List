
import React, { useState } from 'react';

function EditTask({ todo, onClose, onSave }) {
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.discription);
    const [duration, setDuration] = useState(todo.duration);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(todo.id, title, description, duration);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Edit Task</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        className="add-task-input" />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        className="add-task-input" />
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        placeholder="Duration (hrs)"
                        className="add-task-input" />

                    <button
                        className="add-model-btn"
                        type="submit"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="cancle-model-btn"
                        type="button"
                    >
                        Cancel
                    </button>

                </form>
            </div>
        </div>
    );
}

export default EditTask;
