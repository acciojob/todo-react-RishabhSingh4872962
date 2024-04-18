
import React, { useState } from "react";
import './../styles/App.css';
let id=0;
const App = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("")
  function handleAddTodo(){
    setTodos(todos.concat({
      id:id++,
      name,
    }))
    setName("")
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo)=>{
      return todo.id!=id
    }))
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input placeholder="Add todo" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={handleAddTodo}>Add todo</button>
      </div>

        <ul>
        {todos.map((todo)=>{
          return (<li key={todo.id}>
            <span>{todo.name}</span>
            <button onClick={()=>deleteTodo(todo.id)}>Delete Todo</button>
          </li>)
        })}
        </ul>
    </div>
  )
}

export default App
