import React, { useEffect, useRef } from 'react';

export type LinkedinFollowCompanyProps = {
  id: string;
  counter?: string;
  lang?: string;
};

const FollowCompany = ({ id, counter = 'bottom', lang = 'en_US' }: LinkedinFollowCompanyProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ((doc) => {
      const platform = doc.createElement('script');
      platform.type = 'text/javascript';
      platform.src = '//platform.linkedin.com/in.js';
      platform.innerHTML = `lang: ${lang}`;
      ref.current?.appendChild(platform);

      const followCompany = doc.createElement('script');
      followCompany.type = 'IN/FollowCompany';
      followCompany['data-id'] = id;
      followCompany['data-counter'] = counter;
      ref.current?.appendChild(followCompany);
    })(document);
  }, []);

  return <div ref={ref} />;
};

export default FollowCompany;
