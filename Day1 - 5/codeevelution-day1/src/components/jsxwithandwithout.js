import React from 'react'

export const Jsxexample = () => {
    return (
        <div className="hiya">
            <h1>Hiya! Rajesh</h1>
        </div>
    );
}

export const Wihoutjsxexample = () => {

    return React.createElement(
        'div',
        { id: "hiya", className: 'hiya' },
        React.createElement(
            "h1",
            null,
            'Hiya! Rajesh'
        )
    )
}

