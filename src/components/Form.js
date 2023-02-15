import React from 'react'

export default function Form({ inputText, setInputText, setTodos, todos, status, setStatus }) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodosHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, { text: inputText, iscompleted: false, id: Math.random() * 10 }])
        setInputText("")
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)

    }
    return (
        <form>
            <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText} placeholder="Start typing" autoFocus />
            <button className="todo-button" type="submit" onClick={submitTodosHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
