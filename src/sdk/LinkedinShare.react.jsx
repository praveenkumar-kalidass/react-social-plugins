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

    componentDidMount() {
        // Load the SDK asynchronously
        ((d, s, id) => {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
            if (d.getElementById(id)) {return;}
            js = d.createElement(s);
            js.id = id;
            js.type = 'text/javascript';
            js.src = '//platform.linkedin.com/in.js';
            js.innerHTML = `api_key: ${this.props.apiKey}
                authorize: ${this.props.authorize}
                lang: ${this.props.lang}`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'linkedin-jssdk');
    }

    render() {
        return (
            <div>
                <script type='IN/Share'></script>
            </div>
        )
    }
}

export default LinkedinShare;
