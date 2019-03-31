import React, { Component } from 'react';
import Time from './format_time';

class Stopwatch extends Component {

    constructor(props){
        super(props);

        this.state = {
            status: 'STOPPED',
            start: null,
            elapsed: 0
        };

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);
    }

    start(){
        this.setState({
            status: 'RUNNING',
            start: new Date().getTime()
        });

        setTimeout(this.update, 10);
    }

    stop(){
        this.setState({
            status: 'STOPPED'
        });
    }

    reset(){
        this.setState({
            status: 'STOPPED',
            start: null,
            elapsed: 0
        });
    }

    update(){
        const { status, start } = this.state;

        if(status === 'RUNNING'){
            this.setState({
                elapsed: new Date().getTime() - start
            });

            setTimeout(this.update, 10);
        }
    }

    render(){
        const { elapsed, status } = this.state;

        return (
            <div className="jumbotron">
                <h1 className="display-3"><Time elapsed={elapsed}/></h1>
                <hr className="my-3"/>
                <p className="lead text-center">{status}</p>
                <p className="text-center">
                    <button className="btn btn-outline-success mx-3" onClick={this.start}>Start</button>
                    <button className="btn btn-outline-danger mx-3" onClick={this.stop}>Stop</button>
                    <button className="btn btn-outline-warning mx-3" onClick={this.reset}>Reset</button>
                </p>
            </div>
        )
    }
}

export default Stopwatch;