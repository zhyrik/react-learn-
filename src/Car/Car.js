import React from 'react'
import './Car.css'

export default (props) => {
  const inputStyle = ['input']
  if (props.name !== '') inputStyle.push('input-green')
  else inputStyle.push('input-red')
  if (props.name.length > 4) inputStyle.push('input-valid')
  return (
    <div className="Car">
      <h1>{ props.name }</h1>
      <p>Year: { props.year } </p>
      <input onChange={props.writeNewName} className={inputStyle.join(' ')} value={props.name} />
      <button onClick={props.delete}>Delete</button>
    </div>
  )
}