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
            js.innerHTML = `api_key: ${apiKey}
                authorize: ${authorize}
                lang: ${lang}`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'linkedin-jssdk');
    }

    render () {
        return (
            <div>
                <script type="IN/Share" />
            </div>
        );
    }
}

export default LinkedinShare;
