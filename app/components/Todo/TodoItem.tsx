'use client'

import { ClassNameValue, twMerge } from 'tailwind-merge'

interface TodoItemProps {
  id: string
  title: string
  complete?: boolean
  className?: ClassNameValue
  toggleTodo: (id: string, complete: boolean) => void
}

export default function TodoItem({
  id,
  title,
  complete = false,
  className,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li
      className={twMerge(
        className,
        'py-1 flex hover:bg-gray-800/30 transition-colors rounded px-2',
      )}
    >
      <div className="flex items-center gap-1 flex-1">
        <input
          type="checkbox"
          id={id}
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          className="peer-checked:line-through peer-checked:text-gray-400 w-full cursor-pointer"
          htmlFor={id}
        >
          {title}
        </label>
      </div>
    </li>
  )
}
