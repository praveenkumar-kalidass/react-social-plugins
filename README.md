# React Social Plugins

## Install

Install the component using [NPM](https://www.npmjs.com/):

```sh
$ npm install --save react-social-plugins
```

## Usage

### Initialise module

```js
import {
  LinkedinFollowCompany,
  LinkedinLogin,
  LinkedinProfile,
  LinkedinShare
} from 'react-social-plugins';
```

### Render
- [Linkedin Follow Company](#linkedin-follow-company)
- [Linkedin Login](#linkedin-login)
- [Linkedin Profile](#linkedin-profile)
- [Linkedin Share](#linkedin-share)

#### Linkedin Follow Company
Renders a "Follow" button for a company

```html
<LinkedinFollowCompany
  apiKey="xxxxxxxxxxxxxx"
  companyId={12312312}
  counter="top" // Or "right"
  authorize
  lang="en_US"
/>
```

#### Linkedin Login
Renders a "Sign in with LinkedIn" button

```html
<LinkedinLogin
  apiKey="xxxxxxxxxxxxxx"
  authorize
  lang="en_US"
  onError={this.handleError}
  onSuccess={this.handleSuccess}
/>
```

#### Linkedin Profile
Renders a "Add to profile" button

```html
<LinkedinProfile
  lang="en_US"
  task="CERTIFICATION_NAME" // Or "SCHOOL_NAME"
/>
```

#### Linkedin Share
Render a "Share" button

```html
<LinkedinShare
  apiKey="xxxxxxxxxxxxxx"
  authorize
  lang="en_US"
/>
```

## License

[MIT License](http://opensource.org/licenses/MIT)
