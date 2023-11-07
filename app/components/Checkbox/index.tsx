'use client'

import { useState } from 'react'

interface CheckboxProps {
  isChecked?: boolean
  onCheck?: (checked: boolean) => void
}

export default function Checkbox({
  isChecked = false,
  onCheck,
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked)

  const handleCheck = () => {
    setChecked(() => !checked)
    onCheck && onCheck(checked)
  }

  return (
    <button className="w-6 h-6 rounded bg-gray-600" onClick={handleCheck}>
      <span data-checked={checked} className="data-[checked=false]:invisible">
        &#10004;
      </span>
    </button>
  )
}
