# React Linkedin SDK

## Install

Install the component using [NPM](https://www.npmjs.com/):

```sh
$ npm install --save react-linkedin-sdk
```

## Usage

### Initialise module

```js
import {
    LinkedinLogin,
    LinkedinProfile,
    LinkedinShare
} from 'react-linkedin-sdk';
```

### Render
- [Linkedin Login](#in-login)
- [Linkedin Profile](#in-profile)
- [Linkedin Share](#in-share)

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

## Roadmap
- [X] Login
- [X] Add to Profile
- [X] Share

## License

[MIT License](http://opensource.org/licenses/MIT)