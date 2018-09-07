import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LinkedinLogin extends Component {
    static propTypes = {
        apiKey: PropTypes.string.isRequired,
        authorize: PropTypes.bool,
        lang: PropTypes.string,
        onSuccess: PropTypes.func.isRequired,
        onError: PropTypes.func.isRequired
    };

    static defaultProps = {
        authorize: true,
        lang: 'en_US'
    };

    componentDidMount() {
        window.onLinkedInLoad = () => {
            window.IN.Event.on(IN, 'auth', this.getProfileData);
        };

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
                lang: ${this.props.lang}
                onLoad: onLinkedInLoad`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'linkedin-jssdk');
    }

    getProfileData = () => {
        window.IN.API.Raw('/people/~')
            .result(this.props.onSuccess)
            .error(this.props.onError);
    }

    render() {
        return (
            <div>
                <script type='in/Login'></script>
            </div>
        )
    }
}

export default LinkedinLogin;
