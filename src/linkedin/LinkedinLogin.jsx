import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LinkedinLogin extends Component {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
    authorize: PropTypes.bool,
    lang: PropTypes.string,
    onError: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired
  };

  static defaultProps = {
    authorize: true,
    lang: 'en_US'
  };

  componentDidMount () {
    window.onLinkedInLoad = () => {
      window.IN.Event.on(IN, 'auth', this.getProfileData);
    };

    // Load the SDK asynchronously
    ((doc, tag, id) => {
      const {apiKey, authorize, lang} = this.props,
        [element] = doc.querySelectorAll(tag);
      if (doc.getElementById(id)) {
        return;
      }
      let js = doc.createElement('script');
      js.id = id;
      js.type = 'text/javascript';
      js.src = '//platform.linkedin.com/in.js';
      js.innerHTML = `api_key: ${apiKey}
        authorize: ${authorize}
        lang: ${lang}
        onLoad: onLinkedInLoad`;
      element.insertBefore(js, element.lastChild);
    })(document, '.linkedin-login', 'linkedin-jssdk');
  }

  componentWillUnmount () {
    window.IN = {};
  }

  getProfileData = () => {
    const {onError, onSuccess} = this.props;
    window.IN.API.Raw('/people/~').
      result(onSuccess).
      error(onError);
  }

  render () {
    return (
      <div className="linkedin-login">
        <script type="IN/Login" />
      </div>
    );
  }
}

export default LinkedinLogin;
