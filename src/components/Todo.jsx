import React from 'react';

import "../styles/Todo.css";

const Todo = ({title, status, handleCompleteTodo, id}) => {
    return (
        <div className="todo-item">
            <p>{title}</p>
                <button
                    className={status ? "complete" : "reset"}
                    onClick={() => handleCompleteTodo(id)}
                    >
                    {status ? "Reset" : "Complete"}
                </button>
        </div>
    );
};

export default Todo;