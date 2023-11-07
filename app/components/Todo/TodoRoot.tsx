import { ClassNameValue, twMerge } from 'tailwind-merge'

interface TodoRootProps {
  children: React.ReactNode
  className?: ClassNameValue
}

export default function TodoRoot({ children, className }: TodoRootProps) {
  return (
    <ul className={twMerge(className, 'bg-gray-700 p-2 rounded')}>
      {children}
    </ul>
  )
}
