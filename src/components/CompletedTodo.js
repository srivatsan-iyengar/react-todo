import React from 'react'

export default function CompletedTodo({ completeTodo }) {
  return (
    <li><div style={{ color: "red" }}>{completeTodo.title}</div></li>
  )
}
