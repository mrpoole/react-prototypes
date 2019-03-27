import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name: 'Bob',
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);

function luckyNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

function greeting(user) {
    return (
        <div className="container">
            <h1>Welcome {user.name}!</h1>
            <h2 className="text-muted">Your lucky number is: {user.luckyNumber}</h2>
        </div>
    )
}