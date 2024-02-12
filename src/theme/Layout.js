import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import VercelAnalytics from '@site/src/components/VercelAnalytics';

export default function Layout(props) {
  return (
    <>
      <VercelAnalytics />
      <OriginalLayout {...props} />
    </>
  );
}
