import {react, createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todoMsg:"firstTodo",
            completed:false
        }

    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}
}
);

export const useTodoContext = () => {
    return useContext(TodoContext);
    }
export const TodoProvider = TodoContext.Provider;    