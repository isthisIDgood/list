import React from 'react';

export function ToDo({ task }) {
    console.log('todo: ', task);
    return <li>{task}</li>
}
