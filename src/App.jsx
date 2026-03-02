import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { useState, useEffect } from 'react'
import { Footer } from "./components/Footer"

function App() {
  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    const newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {
      return
    }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos} />
      <div className="card">
        <Tabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          todos={todos} />
        <TodoList
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
          todos={todos}
          selectedTab={selectedTab} />
        <TodoInput handleAddTodo={handleAddTodo} />
      </div>
      <Footer />
    </>
  )
}

export default App
