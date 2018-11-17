import React from 'react'

export default (props) => (
  <div style={{fontWeight: 600, fontSize: '20px', border: '1px solid black', margin: '10px'}}>
    <h1>{ props.name }</h1>
    <p>Year: { props.year } </p>
    <input onChange={props.writeNewName}/>
    <button onClick={props.delete}>Delete</button>
  </div>
)