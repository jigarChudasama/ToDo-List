import React from 'react'

function TaskCard() {



    return (
        <div className="grid-container">
            <div className="grid-item">
                <div className='checkbox' >
                    <input type="checkbox" name="task" id="task-title" />
                    <label htmlFor="task-title">Team Meeting</label>
                </div>
                <div className='discription' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className='Timeline' >
                    10:30 AM - 12:00 PM
                </div>
            </div>
        </div>
    )
}

export default TaskCard