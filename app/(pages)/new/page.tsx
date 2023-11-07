import { prisma } from '@/app/database'
import Link from 'next/link'
import { redirect } from 'next/navigation'

async function createTodo(data: FormData) {
  'use server'

  const title = data.get('title')?.valueOf()

  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Invalid title')
  }

  await prisma.todo.create({ data: { title, complete: false } })
  redirect('/')
}

export default function NewTodo() {
  return (
    <main className="flex flex-col gap-2">
      <header>
        <h2 className="text-xl">New</h2>
      </header>
      <form className="flex gap-2 flex-col" action={createTodo}>
        <div className="flex flex-col">
          <label htmlFor="name">Task name</label>
          <input
            autoFocus
            type="text"
            id="title"
            name="title"
            required
            className="p-2 rounded bg-gray-700 outline-none focus-visible:ring-2 ring-gray-600 transition-colors"
          />
        </div>
        <div className="flex justify-between">
          <Link href={'/'} className="p-2 rounded bg-gray-600 w-24 text-center">
            Cancelar
          </Link>
          <button type="submit" className="p-2 rounded bg-blue-600 w-24">
            Salvar
          </button>
        </div>
      </form>
    </main>
  )
}
