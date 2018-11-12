import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LinkedinFollowCompany extends Component {
  static propTypes = {
    companyId: PropTypes.number,
    counter: PropTypes.oneOf(['top', 'right']),
    lang: PropTypes.string
  };

  static defaultProps = {
    counter: 'top',
    lang: 'en_US'
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
    })(document, '.linkedin-follow-company', 'linkedin-jssdk');
  }

  componentWillUnmount () {
    window.IN = {};
  }

  render () {
    const {companyId, counter} = this.props;

    return (
      <div className="linkedin-follow-company">
        <script
          type="IN/FollowCompany"
          data-id={companyId}
          data-counter={counter}
        />
      </div>
    );
  }
}

export default LinkedinFollowCompany;
