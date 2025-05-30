import React, { useEffect } from 'react';

export type XTweetProps = {
  id: string;
  username: string;
  lang?: string;
  cards: 'hidden' | undefined;
  conversation: 'none' | undefined;
  theme: 'dark' | undefined;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

const Tweet = ({ id, lang = 'en', username, cards, conversation, theme, width, align }: XTweetProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }, []);

  return (
    <blockquote
      className="twitter-tweet"
      data-lang={lang}
      data-cards={cards}
      data-conversation={conversation}
      data-theme={theme}
      data-width={width}
      data-align={align}
    >
      <a href={`https://twitter.com/${username}/status/${id}`} />
    </blockquote>
  );
};

export default Tweet;