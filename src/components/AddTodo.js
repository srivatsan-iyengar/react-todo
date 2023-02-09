import React, { useState } from 'react'


export default function AddTodo({ addTodo }) {
    const [todoTitle, setTodoTitle] = useState("");
    return (
        <div>
            <input type="text" onChange={(e) => setTodoTitle(e.target.value)} value={todoTitle} />
            <button onClick={() => {
                addTodo(todoTitle)
                setTodoTitle("")
            }}>Add Todo</button>
        </div>
    )
}
