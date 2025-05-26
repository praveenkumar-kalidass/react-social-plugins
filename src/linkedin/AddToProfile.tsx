import React, { useMemo } from 'react';

export type LinkedinAddToProfileProps = {
  lang?: string;
  fields?: string | Record<string, string>;
};

const AddToProfile = ({ lang = 'en_US', fields = '' }: LinkedinAddToProfileProps) => {
  const urlParams = useMemo(() => {
    if (!fields) {
      return '';
    }

    if (typeof fields === 'string') {
      return `?${fields}`;
    }

    const params = new URLSearchParams();
    Object.entries(fields).forEach(([key, value]) => {
      params.set(key, value);
    });
    return `?${params.toString()}`;
  }, [fields]);

  return (
    <a href={`https://www.linkedin.com/profile/add${urlParams}`}>
      <img src={`https://download.linkedin.com/desktop/add2profile/buttons/${lang}.png`} alt="LinkedIn Add to Profile button" />
    </a>
  );
};

export default AddToProfile;