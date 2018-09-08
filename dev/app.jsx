import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {LinkedinLogin, LinkedinShare} from '../src/index';

class App extends Component {
    onSuccess = (data) => {
        alert('Success', data);
    }

    onError = () => {
        alert('Error', data);
    }

    render() {
        return (
            <div>
                <LinkedinLogin
                    apiKey='78reka6gey2jsx'
                    authorize={true}
                    lang='en_US'
                    onSuccess={this.onSuccess}
                    onError={this.onError}>
                </LinkedinLogin>
                <LinkedinShare
                    apiKey='78reka6gey2jsx'
                    authorize={true}
                    lang='en_US'>
                </LinkedinShare>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
