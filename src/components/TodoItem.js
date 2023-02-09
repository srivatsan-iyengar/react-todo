import React from 'react'

export default function TodoItem({ todo, deleteTask, markTodoComplete }) {
  return (
    <li>{todo.title} <button onClick={() => markTodoComplete(todo.id)}>completed</button> <button onClick={() => deleteTask(todo.id)}>delete</button> </li>
  )
}
