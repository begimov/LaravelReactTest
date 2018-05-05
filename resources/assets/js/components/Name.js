import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Name extends Component {
    render() {
        const clock =  false ? <Clock /> : 'A';
        // return null;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">NAME</div>

                            <div className="card-body">
                                {this.props.name + '!!!'}<br /><br />

                                <Welcome name='AAABC' /><br /><br />

                                <Clock /><br />

                                {clock}<br />

                                {false ? <Clock /> : 'B'}<br />

                                {true && <Clock />}<br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function Welcome(props) {
    return <h2>WELCOME functional component {props.name}</h2>;
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: 'NAME123'
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        if (true) {
            return (
                <div>
                    <h2>{this.state.date.toLocaleTimeString()}</h2>
                    <p>{this.state.name}</p>
                    <p><button onClick={this.handleClick}>UPDATE</button></p>
                    <p><a href="#" onClick={(e) => this.handleLinkClick(1, e)}>CLICK</a></p>
                </div>
            );
        }
        return 'A';
    }

    handleClick() {
        this.setState({name: 'UPDATED NAME Click'});
    }

    handleLinkClick(id, e) {
        console.log(id);
        e.preventDefault();
        this.setState({name: 'UPDATED NAME Link Click'});
    }

    tick() {
        this.setState(((prevState, props) => {
            return {
                date: new Date()
            }
        }));
    }
}

