import { useState } from 'react'
import './style.scss'

export default function CheckBox ({ onChange, label }) {
  const [isChecked, setChecked] = useState(false)
  const toggleCheckboxChange = () => {
    setChecked(!isChecked)
    onChange(label)
  }
  return (
    <div className="checkbox">
      <label>
        <input
          checked={isChecked}
          onChange={toggleCheckboxChange}
          type="checkbox" />
        <span>{label}</span>
      </label>
    </div>
  )
}
