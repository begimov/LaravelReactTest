import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Name from './Name'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                I'm an example component!<br/> <br/>
                                <Name name="Gal" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(
        <App />, 
        document.getElementById('app')
    );
}
