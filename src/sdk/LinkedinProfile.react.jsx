import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LinkedinProfile extends Component {
    static propTypes = {
        lang: PropTypes.string,
        task: PropTypes.string
    };

    static defaultProps = {
        lang: 'en_US',
        task: 'CERTIFICATION_NAME'
    };

    shouldComponentUpdate () {
        return false;
    }

    render () {
        const {lang, task} = this.props;
        return (
            <div>
                <a
                    href={`https://www.linkedin.com/profile/add?startTask=${task}`}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img
                        alt="LinkedIn Add to Profile button"
                        src={`https://download.linkedin.com/desktop/add2profile/buttons/${lang}.png`}
                    />
                </a>
            </div>
        );
    }
}

export default LinkedinProfile;
