import React, { HTMLAttributes, useEffect, useMemo } from 'react';

export type XButtonProps = {
  type: 'share' | 'follow' | 'mention' | 'hashtag' | 'message';
  size: 'large' | undefined;
  text?: string;
  url?: string;
  via?: string;
  hashtags?: string[];
  related?: string[];
  lang?: string;
  showCount?: boolean;
  showScreenName?: boolean;
  screenName?: string;
} & HTMLAttributes<HTMLAnchorElement>;

const Button = ({
  type,
  size,
  text,
  url,
  via,
  hashtags = [],
  related = [],
  lang = 'en',
  showCount = false,
  showScreenName = true,
  screenName,
  ...props
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const href = useMemo(() => {
    const hrefMap: Record<XButtonProps['type'], string> = {
      share: 'https://twitter.com/share',
      follow: `https://twitter.com/${via}`,
      mention: `https://twitter.com/intent/tweet?screen_name=${via}`,
      hashtag: `https://twitter.com/intent/tweet?button_hashtag=${hashtags.join(',')}`,
      message: `https://twitter.com/messages/compose?recipient_id=3805104374`,
    };
    return hrefMap[type];
  }, [type, via]);

  const className = useMemo(() => {
    const classNameMap: Record<XButtonProps['type'], string> = {
      share: 'twitter-share-button',
      follow: 'twitter-follow-button',
      mention: 'twitter-mention-button',
      hashtag: 'twitter-hashtag-button',
      message: 'twitter-dm-button',
    };
    return classNameMap[type];
  }, [type]);

  return (
    <a
      href={href}
      className={className}
      data-size={size}
      data-text={text}
      data-url={url}
      data-via={via}
      data-hashtags={hashtags.join(',')}
      data-related={related.join(',')}
      data-lang={lang}
      data-show-count={Boolean(showCount)}
      data-show-screen-name={Boolean(showScreenName)}
      data-screen-name={screenName}
      {...props}
    />
  )
};

export default Button;