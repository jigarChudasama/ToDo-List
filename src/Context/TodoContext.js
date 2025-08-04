import { faZ } from "@fortawesome/free-solid-svg-icons";
import { useContext , createContext } from "react";

export const TodoContext = createContext({
    todo:[{
        id : 1 ,
        title : "title",
        discription : "discription" ,
        duration : "hour",
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