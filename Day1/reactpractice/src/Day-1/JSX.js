import React from 'react'

// With JSX
export default function JSX() {
    return (
        <div>
            <h1>Hello from JSX</h1>
        </div>
    )
}

// Without JSX
export function WithoutJSX() {
    return (
        React.createElement('div', { id: 'myDiv' },
            React.createElement('h1', { class: 'h1class' }, 'Hello From WithoutJSX')
        )
    )
}