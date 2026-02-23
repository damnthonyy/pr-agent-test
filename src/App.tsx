import { useState, useCallback } from 'react'
import type { TodoItem } from './types/todo'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function generateId(): string {
  return crypto.randomUUID()
}

function createTodo(label: string): TodoItem {
  return { id: generateId(), label, done: false }
}

export default function App() {
  const [todos, setTodos] = useState<TodoItem[]>([])

  const handleAdd = useCallback((label: string) => {
    setTodos((previous) => [...previous, createTodo(label)])
  }, [])

  const handleToggle = useCallback((id: string) => {
    setTodos((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    )
  }, [])

  const handleRemove = useCallback((id: string) => {
    setTodos((previous) => previous.filter((item) => item.id !== id))
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="mx-auto max-w-xl">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">Todo</h1>
        <TodoInput onAdd={handleAdd} />
        <div className="mt-4">
          <TodoList
            items={todos}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        </div>
      </div>
    </div>
  )
}
