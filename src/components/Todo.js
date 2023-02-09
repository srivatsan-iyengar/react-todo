import React, { useState } from 'react'
import AddTodo from './AddTodo'
import CompletedTodo from './CompletedTodo'
import TodoItem from './TodoItem'
import { uuid } from 'uuidv4';

const todosConst = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
]

export default function Todo() {
    const [todos, setTodos] = useState(todosConst)
    const [completeTodos, setCompleteTodos] = useState([])

    const addTodo = (todoTitle) => {
        const newTodo = { id: 4, title: todoTitle }
        setTodos([...todos, newTodo])
    }

    const deleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const markTodoComplete = (id) => {
        setCompleteTodos((prevCompleteTodos) => [...prevCompleteTodos, ...todos.filter(todo => todo.id === id)])
        deleteTask(id)
    }
    return (
        <>
            <AddTodo addTodo={addTodo} />
            <h1>Todo</h1>
            <ul>
                {todos.length > 0 ? todos.map((todo, idx) => <TodoItem key={idx} todo={todo} deleteTask={deleteTask} markTodoComplete={markTodoComplete} />) : "Out of work :)"}
            </ul>
            <h1>Complete Todos</h1>
            <ul>
                { completeTodos.length > 0 ? completeTodos.map((todo, idx) => <CompletedTodo key={idx} completeTodo={todo} />): "You are slacking off :(" }
            </ul>
        </>
    )
}
