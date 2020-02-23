import React from 'react';
import { ToDo } from './ToDo';

export function List({ todos = [
    "thing 1",
    "thing 2",
    "thing 3",
    "thing 4",
    "thing 5",
    "thing 6",
    "thing 7",
] }) {
    
    function renderTodos() {
        return todos.map((todo, i) => <ToDo key={todo} task = {todo} />);
    }

    return (
        <>
            {/* TODO: make a list of <ToDo /> */}
            <ul>
                {renderTodos()}
            </ul>    
            <button>add a todo</button>
        </>
    )
}
