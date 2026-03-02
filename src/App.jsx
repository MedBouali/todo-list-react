import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'
import { Footer } from './components/Footer'

function App() {
  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  return (
    <>
      <Header todos={todos} />
      <div className="card">
        <Tabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          todos={todos} />
        <TodoList />
        <TodoInput />
      </div>
      <Footer />
    </>
  )
}

export default App
