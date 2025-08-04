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
            setFormattedDate(`${day}, ${month} ${year}`);
        };

        updateDate(); // set once on load

        const interval = setInterval(updateDate, 1000 * 60); // update every minute (optional)
        return () => clearInterval(interval); // cleanup
    }, []);




    return (
        <div className='search-bar'>
            <div className='date' >
                {formattedDate}
            </div>
            <div className='search-and-addList' >
                <div className='input' >
                    <input type="text" name="search-task" placeholder='Search Task' id="" />
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