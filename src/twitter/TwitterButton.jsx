import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TwitterButton extends Component {
  static propTypes = {
    hashtags: PropTypes.string,
    lang: PropTypes.string,
    size: PropTypes.oneOf(['large', 'small']),
    target: PropTypes.string.isRequired,
    text: PropTypes.string,
    type: PropTypes.oneOf(['Share', 'Mention', 'Hashtag']).isRequired,
    via: PropTypes.string
  };

  static defaultProps = {
    size: 'small',
    lang: 'us'
  };

  componentWillMount() {
    // Load the SDK asynchronously
    window.twttr = ((d, s, id) => {
      let js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);
      t._e = [];
      t.ready = (f) => {
        t._e.push(f);
      };
      return t;
    })(document, 'script', 'twitter-wjs');
  }

  componentDidMount() {
    const {
      hashtags,
      lang,
      size,
      target,
      text,
      type,
      via
    } = this.props;
    const targetFunc = {
      Hashtag: 'createHashtagButton',
      Mention: 'createMentionButton',
      Share: 'createShareButton'
    };

    // Create Tweet Button
    window.twttr.ready(() => {
      window.twttr.widgets[targetFunc[type]](
        target,
        document.getElementById('tweet-button'),
        {
          hashtags,
          lang,
          size,
          text,
          via
        }
      );
    });
  }

  render() {
    return (
      <div id="tweet-button"></div>
    );
  }
}

export default TwitterButton;
