import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LinkedinCompanyProfile extends Component {
  static propTypes = {
    format: PropTypes.oneOf(['inline', 'hover']),
    lang: PropTypes.string,
    companyId: PropTypes.number.isRequired,
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
        [element] = doc.querySelectorAll(tag);
      if (doc.getElementById(id)) {
        return;
      }
      let js = doc.createElement('script');
      js.id = id;
      js.type = 'text/javascript';
      js.src = '//platform.linkedin.com/in.js';
      js.innerHTML = `lang: ${lang}`;
      element.insertBefore(js, element.lastChild);
    })(document, '.linkedin-company-profile', 'linkedin-jssdk');
  }

  componentWillUnmount () {
    window.IN = {};
  }

  render () {
    const {
      companyId,
      format,
      text
    } = this.props;

    return (
      <div className="linkedin-company-profile">
        <script
          type="IN/CompanyProfile"
          data-id={companyId}
          data-format={format}
          data-related="false"
          data-text={text}
        />
      </div>
    );
  }
}

export default LinkedinCompanyProfile;
