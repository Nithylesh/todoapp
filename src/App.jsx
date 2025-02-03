import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { useState, useEffect } from "react"

function App() {
/*
const todos = [
  
  {input: 'Learn Redux', Completed: false },
  {input: 'Build something awesome', Completed: true }
]
*/

const [todos, setTodos] = useState([{input: 'Learn React', Completed: false }])
const [selectedTab, setSelectedTab] = useState('Active')


function handleaddTodo (newTodo) {
  const newTodoList = [...todos, {input: newTodo, Completed: false}]
  setTodos(newTodoList)
  handleSaveData(newTodoList)
}

function handleCompleteTodo (index) {
  let newTodoList = [...todos]
  let completedTodos = todos[index]
  completedTodos['Completed'] = true  
  newTodoList[index] = completedTodos
  setTodos(newTodoList)
  handleSaveData(newTodoList)

}

function handleDeleteTodo (index) {
  let newTodoList = todos.filter((val,valIndex) => {return valIndex !== index} )
  setTodos(newTodoList)
  handleSaveData(newTodoList)
}

function handleSaveData (currentTodos) {
  localStorage.setItem('todo-app', JSON.stringify({todos: currentTodos}))

}

useEffect(() => {
  if (!localStorage || !localStorage.getItem('todo-app')) {
    return
  }
  // console.log('Data loaded')  
  let db = JSON.parse(localStorage.getItem('todo-app'))
  setTodos(db.todos)
},[])
  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <TodoList todos={todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}/>
      <TodoInput handleaddTodo={handleaddTodo}/>
    </>
  )
}

export default App
