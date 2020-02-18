import React from 'react';
import { ToDo } from './ToDo';

export function List() {
    const todos = [
        "thing 1",
        "thing 2",
        "thing 3",
        "thing 4",
        "thing 5",
        "thing 6",
    ];

    const todosToRender = []
    return (
        <>
            {/* TODO: make a list of <ToDo /> */}
            <ul>{todosToRender}</ul>
            <button>add a todo</button>
        </>
    )
}
