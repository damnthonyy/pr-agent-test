import type { TodoItem } from '../types/todo'

interface TodoRowProps {
  item: TodoItem
  onToggle: () => void
  onRemove: () => void
}

export function TodoRow({ item, onToggle, onRemove }: TodoRowProps) {
  return (
    <li className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors">
      <input
        type="checkbox"
        checked={item.done}
        onChange={onToggle}
        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
        aria-label={item.done ? 'Marquer comme non terminée' : 'Marquer comme terminée'}
      />
      <span
        className={`flex-1 ${item.done ? 'line-through text-slate-500' : 'text-slate-800'}`}
      >
        {item.label}
      </span>
      <button
        type="button"
        onClick={onRemove}
        className="text-red-600 hover:text-red-800 font-medium text-sm"
        aria-label="Supprimer"
      >
        Supprimer
      </button>
    </li>
  )
}
