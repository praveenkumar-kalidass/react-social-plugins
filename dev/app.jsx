import {
  LinkedinFollowCompany,
  LinkedinLogin,
  LinkedinAddProfile,
  LinkedinShare
} from '../src';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  handleError = (data) => {
    alert('Success', data);
  }

  handleSuccess = (data) => {
    alert('Error', data);
  }

  render () {
    return (
      <div>
        <LinkedinLogin
          apiKey="78reka6gey2jsx"
          authorize
          lang="en_US"
          onError={this.handleError}
          onSuccess={this.handleSuccess}
        />
        <LinkedinShare
          apiKey="78reka6gey2jsx"
          authorize
          lang="en_US"
        />
        <LinkedinAddProfile
          lang="en_US"
          task="CERTIFICATION_NAME"
        />
        <LinkedinFollowCompany
          apiKey="78reka6gey2jsx"
          companyId={2414183}
          authorize
          lang="en_US"
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
