import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {
  const [todos, setTodos] = useState([])
  
  fetch("http://localhost:3000/todos")    // this is wrong way to send req to backend , it is kind of recursive ,
  .then(async function(response){                 // everytime you send req App() rerendrs , when app rerenders req again goes to backend and this cycle goes on causing infinite calling to backend
      const json = await response.json();       // Solution for this is useeffect() hook
      setTodos[json.todos];
  })
  

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
