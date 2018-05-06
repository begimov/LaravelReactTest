import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Name extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        const clock = false ? <Clock /> : 'A';

        const numbers = [1, 2, 3, 4, 5];
        // return null;
    
        return (
            <div className="container">
                <div>NAME</div>

                <div>
                    {this.props.name + '!!!'}<br /><br />

                    <Welcome name='AAABC' /><br /><br />

                    <Clock /><br />

                    {clock}<br />

                    {false ? <Clock /> : 'B'}<br />

                    {true && <Clock />}<br />

                    <ul>
                        {numbers.map((number) => <li key={number.toString()}>{number}</li>)}
                        {numbers}
                    </ul>

                    <form onSubmit={(e) => {e.preventDefault(); console.log('SUBMIT')}}>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <textarea value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>

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
        this.setState({ name: 'UPDATED NAME Click' });
    }

    handleLinkClick(id, e) {
        console.log(id);
        e.preventDefault();
        this.setState({ name: 'UPDATED NAME Link Click' });
    }

    tick() {
        this.setState(((prevState, props) => {
            return {
                date: new Date()
            }
        }));
    }
}

