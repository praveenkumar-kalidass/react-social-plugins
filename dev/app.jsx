import {
  LinkedinAddProfile,
  LinkedinCompanyProfile,
  LinkedinFollowCompany,
  LinkedinLogin,
  LinkedinProfile,
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
        <LinkedinCompanyProfile
          lang="en_US"
          companyId={2414183}
          format="inline"
          text="Praveenkumar K"
        />
        <LinkedinProfile
          lang="en_US"
          profileUrl="http://www.linkedin.com/in/praveenkumar-outlook"
          format="inline"
          text="Praveenkumar K"
        />
        <LinkedinAddProfile
          lang="en_US"
          task="CERTIFICATION_NAME"
        />
        <LinkedinFollowCompany
          companyId={2414183}
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
