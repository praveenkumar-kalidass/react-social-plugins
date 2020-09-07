# React Social Plugins

<p>
  <a href="https://www.npmjs.com/package/react-social-plugins">
    <img src="https://badge.fury.io/js/react-social-plugins.svg" alt="npm version" height="18">
  </a>
  <a href="https://www.npmjs.com/package/react-social-plugins">
    <img src="https://david-dm.org/praveenkumar-outlook/react-social-plugins/status.svg" alt="dependencies Status badge">
    </a>
  <a href="https://www.npmjs.com/package/react-social-plugins">
    <img src="https://david-dm.org/praveenkumar-outlook/react-social-plugins/dev-status.svg" alt="devDependency Status badge">
  </a>
  <a href="https://www.npmjs.com/package/react-social-plugins">
    <img src="https://img.shields.io/npm/dw/react-social-plugins" alt="Downloads">
  </a>
  <a href="https://paypal.me/praveenkumarkalidass?locale.x=en_GB">
    <img src="https://img.shields.io/badge/paypal-donate-red" alt="Paypal">
  </a>
</p>

## Install

Install the component using [NPM](https://www.npmjs.com/):

```sh
$ npm install --save react-social-plugins
```

## Usage

### Initialise module

```js
import {
  LinkedinCompanyProfile,
  LinkedinFollowCompany,
  LinkedinLogin,
  LinkedinAddProfile,
  LinkedinProfile,
  LinkedinShare,

  TwitterButton,
  TwitterTweet
} from 'react-social-plugins';
```

### Linkedin Plugins
- [Linkedin Follow Company](#linkedin-follow-company)
- [Linkedin Login](#linkedin-login)
- [Linkedin Add Profile](#linkedin-add-profile)
- [Linkedin Profile](#linkedin-profile)
- [Linkedin Company Profile](#linkedin-company-profile)
- [Linkedin Share](#linkedin-share)

### Twitter Plugins
- [Twitter Button](#twitter-button)
- [Twitter Tweet](#twitter-tweet)

#### Linkedin Follow Company
Renders a "Follow" button for a company

```html
<LinkedinFollowCompany
  companyId={12312312}
  counter="top" // Or "right"
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

#### Linkedin Add Profile
Renders a "Add to profile" button

```html
<LinkedinAddProfile
  lang="en_US"
  task="CERTIFICATION_NAME" // Or "SCHOOL_NAME"
/>
```

#### Linkedin Profile
Renders a "Member profile" card

```html
<LinkedinProfile
  lang="en_US"
  profileUrl="http://www.linkedin.com/in/praveenkumar-outlook"
  format="inline" // Or "hover"
  text="Praveenkumar K" // text to show in "hover" format
/>
```

#### Linkedin Company Profile
Renders a "Company profile" card

```html
<LinkedinCompanyProfile
  lang="en_US"
  companyId={123123123}
  format="inline" // Or "hover"
  text="Company name" // text to show in "hover" format
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

#### Twitter Tweet
Renders the Tweet with the conversation

```html
<TwitterTweet
  align='left'
  coversation='none'
  tweetId='xxxxxxxxxxxxxxxx'
  theme='light'
  width={325}
/>
```

#### Twitter Button
Renders the Tweet button to either Share, Mention or Hashtag

```html
<TwitterButton
  target="/"
  text="Hello World"
  type="Share"
/>
```

```html
<TwitterButton
  hashtags="one,two"
  target="username"
  text="Hello World"
  type="Mention"
  size="large"
  via="username"
/>
```

```html
<TwitterButton
  hashtags="one,two"
  target="username"
  text="Hello World"
  type="Hashtag"
  size="large"
  via="username"
/>
```

## License

[MIT License](http://opensource.org/licenses/MIT)
