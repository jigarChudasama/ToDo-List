import React, { useEffect, useState } from 'react'
import AddTask from './model/AddTask';

function SearchBar() {

    const [formattedDate, setFormattedDate] = useState("");
    const [addTask, setAddTask] = useState(false)

    useEffect(() => {
        const updateDate = () => {
            const date = new Date();
            const day = date.getDate().toString().padStart(2, '0');
            const month = date.toLocaleString('en-US', { month: 'short' });
            const year = date.getFullYear();
            const time = new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
            setFormattedDate(`${day}, ${month} ${year} , ${time}`);
        };

        updateDate();
        const interval = setInterval(updateDate, 1000 * 60);
        return () => clearInterval(interval);
    }, []);




    return (
        <div className='search-bar'>
            <div className='date' >
                {formattedDate}
            </div>
            <div className='search-and-addList' >
                <div className='input' >
                    <input
                        type="text"
                        name="search-task"
                        placeholder='Search Task'
                        id="" />
                </div>

                <button className='btn' onClick={() => {
                    setAddTask(true)
                }}  >add new list</button>
                <AddTask open={addTask} onClose={() => setAddTask(false)} />

            </div>
        </div>
    )
}

export default SearchBar