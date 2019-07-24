import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.user = {
            name: 'Bob',
            number: this.luckyNumber()
        }
    }

    luckyNumber = () => {
        return Math.floor(Math.random() * 1001);
    }

    greeting(user){
        return(
            <div className="container">
                <h1>Hello {user.name}!</h1>
                <h2 className="text-muted">You are lucky number {user.number}</h2>
            </div>
        )
    }

    render() {
        return (   
            this.greeting(this.user)
        )
    }
}
