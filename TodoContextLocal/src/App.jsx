import { useEffect, useState } from 'react'
import { TodoContext,TodoProvider,useTodoContext } from './Context/TodoContext'
import './App.css'
import TodoForm from './Components/TodoForms';
import TodoItem from './Components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo=(todo)=>{
    setTodos((prev)=>([{id:Math.random().toString(36).substr(2, 9), ...todo},...prev]))// ...prev means here add all the previus value form prev array of setTodos
                                                        // same goes for todo here we are saving objects of array so 
                                                        // we just save the id as new data and all the values of todo which will 
                                                        // handled in todo compnents 
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo: prevTodo)))// here we are appling map to whole value 
    // if it is equal to id then add new todo at that id otherwise put the value as it is.
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=> prev.filter((prevTodo)=>(prevTodo.id!=id)))// here it wil save all the todos whose id is not equal to the given id

  }

  const toggleComplete=(id)=>{
    console.log("here");
       setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ?{...prevTodo,completed:!prevTodo.completed} :prevTodo )))

  }

  // here we are going to use the local storage so that we can store out todos in local stoarage util our app in running 
  useEffect(()=>{
     const todos=JSON.parse(localStorage.getItem("todos"));
     if(todos && todos.length>0){
      setTodos(todos);
     }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
