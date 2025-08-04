import React, { useEffect, useState } from 'react';
import { TodoProvider } from './Context/TodoContext';
import { AddTask, Header, Sidebar, TaskCard } from './components';


function App() {

  const [todo, setTodo] = useState([])
  const [addTaskModel, setAddTaskModel] = useState(false)
  const [search, setSearch] = useState("")
  const [formattedDate, setFormattedDate] = useState('');


  const addTask = (title, discription, duration) => {
    setTodo((prev) => [{ id: Date.now(), title, discription, duration, isComplate: false }, ...prev])
  }

  const updateTask = (id, newTitle, newDiscription, newDuration) => {
    setTodo((prev) =>
      prev.map((prevToDo) =>
        prevToDo.id === id
          ? { ...prevToDo, title: newTitle, discription: newDiscription, duration: newDuration }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTodo((prev) => prev.filter((prevToDo) => prevToDo.id !== id))
  }

  const toggleComplate = (id) => {
    setTodo((prev) => prev.map((prevToDo) => (prevToDo.id === id ? { ...prevToDo, isComplate: !prevToDo.isComplate } : prevToDo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodo(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo))
  }, [todo])



  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const day = date.getDate().toString().padStart(2, '0');
      const month = date.toLocaleString('en-US', { month: 'short' });
      const year = date.getFullYear();
      const time = date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      setFormattedDate(`${day}, ${month} ${year} , ${time}`);
    };

    updateDate(); 
    const interval = setInterval(updateDate, 1000);

    return () => clearInterval(interval); 
  }, []);


  return (
    <TodoProvider value={{ todo, addTask, updateTask, deleteTask, toggleComplate }} >
      <div>
        <Sidebar />
        <div className="main-area">
          <Header />
          <main className="main-content">
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
                    id=""
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <button className='btn' onClick={() => {
                  setAddTaskModel(true)
                }}  >Add new list</button>
                <AddTask open={addTaskModel} onClose={() => setAddTaskModel(false)} />

              </div>
            </div>
            <div className='devider' />

            <div className="grid-container">
              {
                todo.length == 0 ? <div>
                  <h3 className='no-data' aria-colspan={3} >No tasks available</h3>
                </div>
                  :
                  todo
                    .filter((todo) => {
                      if (search.toLowerCase() === "") return true;
                      return todo.title.toLowerCase().includes(search.toLowerCase());
                    })
                    .map((todo) => (
                      <TaskCard key={todo.id} todo={todo} />
                    ))
              }
            </div>
          </main>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
