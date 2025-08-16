import React from 'react'

function Apii() {
  const todo=[ {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  }]

  return (
    <div>
      {todo.map((task) =>
    <div key={task.id}>
    <em>{task.title}</em>
    <input type="checkbox" checked={task.completed}></input>
    </div>)}
    </div>
  )
}

export default Apii


