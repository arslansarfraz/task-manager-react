import React from 'react'

export default function TodosList({ todos, todo, setTodos, todotext }) {
    const deleteHandel = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const completeHandel = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        iscompleted: !item.iscompleted
                    };
                }
                return item;
            })
        );
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.iscompleted ? 'completed' : ''}`}>
                {todotext}
            </li>
            <button className='complete-btn' onClick={completeHandel}>
                <i className='fas fa-check'></i>
            </button>
            <button className='trash-btn' onClick={deleteHandel}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}
