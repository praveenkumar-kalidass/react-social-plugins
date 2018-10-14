import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LinkedinProfile extends Component {
  static propTypes = {
    format: PropTypes.oneOf(['inline', 'hover']),
    lang: PropTypes.string,
    profileUrl: PropTypes.string.isRequired,
    text: PropTypes.string
  };

  static defaultProps = {
    format: 'inline',
    lang: 'en_US',
    text: 'Profile'
  };

  componentDidMount () {
    // Load the SDK asynchronously
    ((doc, tag, id) => {
      const {lang} = this.props,
        [element] = doc.getElementsByTagName(tag),
        fjs = element;
      let js = element;
      if (doc.getElementById(id)) {
        return;
      }
      js = doc.createElement(tag);
      js.id = id;
      js.type = 'text/javascript';
      js.src = '//platform.linkedin.com/in.js';
      js.innerHTML = `lang: ${lang}`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'linkedin-jssdk');
  }

  render () {
    const {
      format,
      profileUrl,
      text
    } = this.props;

    return (
      <div>
        <script
          type="IN/MemberProfile"
          data-id={profileUrl}
          data-format={format}
          data-related="false"
          data-text={text}
        />
      </div>
    );
  }
}

export default LinkedinProfile;
