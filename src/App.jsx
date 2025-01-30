import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
const todos = [
  {input: 'Learn React', Completed: false },
  {input: 'Learn Redux', Completed: false },
  {input: 'Build something awesome', Completed: true }
]
  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput />
    </>
  )
}

export default App
