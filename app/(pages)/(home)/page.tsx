import Todo from '@/app/components/Todo'
import { prisma } from '@/app/database'
import Link from 'next/link'

async function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  'use server'

  await prisma.todo.update({ where: { id }, data: { complete } })
}

export default async function Home() {
  const todos = await getTodos()

  return (
    <>
      <header className="flex items-center justify-between mb-2">
        <h2 className="text-xl">Todos</h2>
        <Link
          href={'/new'}
          className="
            p-2 rounded outline-none ring-1 ring-gray-500 min-w-[6rem] 
            hover:bg-gray-500 active:bg-gray-600 transition-colors focus-visible:ring-2 text-center"
        >
          New
        </Link>
      </header>

      <Todo.Root>
        {todos.length > 0 ? (
          <>
            {todos.map((todo) => (
              <Todo.Item
                key={todo.id}
                id={todo.id}
                title={todo.title}
                complete={todo.complete}
                toggleTodo={toggleTodo}
              />
            ))}
          </>
        ) : (
          <li className="text-center text-gray-400">No data found</li>
        )}
      </Todo.Root>
    </>
  )
}
