import React, { useEffect } from 'react';
import { inject } from '@vercel/analytics';

const VercelAnalytics = () => {
  useEffect(() => {
    // Ensures this runs only in the browser
    if (typeof window !== 'undefined') {
      inject();
    }
  }, []);

  return null; // This component does not render anything
};

export default VercelAnalytics;