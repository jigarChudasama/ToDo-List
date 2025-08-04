import { useContext , createContext } from "react";

export const TodoContext = createContext({
    todo:[{
        id : 1 ,
        title : " ",
        discription : " " ,
        duration : " ",
        isComplate : false
    }],
    addTask : (title , discription , duration ) => {},
    updateTask : (id , title , discription , duration) => {},
    deleteTask : (id)=> {},
    toggleComplate : (id) =>{}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}