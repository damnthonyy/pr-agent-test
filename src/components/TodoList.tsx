import type { TodoItem } from '../types/todo'
import { TodoRow } from './TodoRow'

interface TodoListProps {
  items: TodoItem[]
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export function TodoList({ items, onToggle, onRemove }: TodoListProps) {
  if (items.length === 0) {
    return (
      <p className="text-slate-500 text-center py-8">
        Aucune tâche. Ajoutez-en une ci-dessus.
      </p>
    )
  }

  return (
    <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white overflow-hidden">
      {items.map((item) => (
        <TodoRow
          key={item.id}
          item={item}
          onToggle={() => onToggle(item.id)}
          onRemove={() => onRemove(item.id)}
        />
      ))}
    </ul>
  )
}
