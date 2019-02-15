import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TwitterTweet extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'right', 'center']),
    conversation: PropTypes.string,
    lang: PropTypes.string,
    tweetId: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(['light', 'dark']),
    width: PropTypes.number
  };

  static defaultProps = {
    align: 'left',
    lang: 'us',
    theme: 'light',
    width: 325
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
      align,
      conversation,
      lang,
      theme,
      tweetId,
      width
    } = this.props;

    // Create Tweet
    window.twttr.ready(() => {
      window.twttr.widgets.createTweet(
        tweetId,
        document.getElementById('tweet-embed'),
        {
          align,
          conversation,
          lang,
          theme,
          width
        }
      );
    });
  }

  render() {
    return (
      <div id="tweet-embed"></div>
    );
  }
}

export default TwitterTweet;
