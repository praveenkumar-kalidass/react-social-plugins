import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LinkedinProfile extends Component {
    static propTypes = {
        task: PropTypes.string
    };

    static defaultProps = {
        task: 'CERTIFICATION_NAME'
    };

    render() {
        return (
            <div>
                <a href={`https://www.linkedin.com/profile/add?startTask=${this.props.task}`}
                    rel='nofollow'
                    target='_blank'>
                    <img src={`https://download.linkedin.com/desktop/add2profile/buttons/${this.props.lang}.png`}
                        alt='LinkedIn Add to Profile button'>
                    </img>
                </a>
            </div>
        )
    }
}

export default LinkedinProfile;
