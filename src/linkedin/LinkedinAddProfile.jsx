import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LinkedinAddProfile extends Component {
  static propTypes = {
    lang: PropTypes.string,
    task: PropTypes.oneOf(['CERTIFICATION_NAME', 'SCHOOL_NAME'])
  };

  static defaultProps = {
    lang: 'en_US',
    task: 'CERTIFICATION_NAME'
  };

  render() {
    const {lang, task} = this.props;

    return (
      <div>
        <a
          href={`https://www.linkedin.com/profile/add?startTask=${task}`}
          rel="noopener noreferrer"
          target="_blank">
          <img
            alt="LinkedIn Add to Profile button"
            src={`https://download.linkedin.com/desktop/add2profile/buttons/${lang}.png`}
          />
        </a>
      </div>
    );
  }
}

export default LinkedinAddProfile;
