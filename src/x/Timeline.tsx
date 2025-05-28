import React, { useEffect } from 'react';

export type XTimelineProps = {
  username: string;
  width?: string;
  height?: string;
  theme?: 'dark' | 'light';
  chrome?: ('noheader' | 'nofooter' | 'noborders' | 'noscrollbar' | 'transparent')[];
  tweetLimit?: string;
}

const Timeline = ({
  username,
  width,
  height,
  theme,
  chrome,
  tweetLimit,
}: XTimelineProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }, []);

  return (
    <a
      className="twitter-timeline"
      href={`https://twitter.com/${username}`}
      data-width={width}
      data-height={height}
      data-theme={theme}
      data-chrome={chrome?.join(' ')}
      data-tweet-limit={tweetLimit}
    />
  );
};

export default Timeline;
