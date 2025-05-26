import React, { useEffect, useRef } from 'react';

export type LinkedinShareProps = {
  url?: string;
  lang?: string;
};

const Share = ({ url = 'https://www.linkedin.com', lang = 'en_US' }: LinkedinShareProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ((doc) => {
      const platform = doc.createElement('script');
      platform.type = 'text/javascript';
      platform.src = '//platform.linkedin.com/in.js';
      platform.innerHTML = `lang: ${lang}`;
      ref.current?.appendChild(platform);

      const share = doc.createElement('script');
      share.type = 'IN/Share';
      share['data-url'] = url;
      ref.current?.appendChild(share);
    })(document);
  }, []);

  return <div ref={ref} />;
};

export default Share;
