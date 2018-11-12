import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LinkedinShare extends Component {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
    authorize: PropTypes.bool,
    lang: PropTypes.string
  };

  static defaultProps = {
    authorize: true,
    lang: 'en_US'
  };

  componentDidMount () {
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
        lang: ${lang}`;
      element.insertBefore(js, element.lastChild);
    })(document, '.linkedin-share', 'linkedin-jssdk');
  }

  componentWillUnmount () {
    window.IN = {};
  }

  render () {
    return (
      <div className="linkedin-share">
        <script type="IN/Share" />
      </div>
    );
  }
}

export default LinkedinShare;
