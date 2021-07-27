import React from 'react';
import { useRouter } from 'next/router';

// file => /docs/[...params].jsx
// route => /docs/a/b/c

export default () => {
  const router = useRouter();
  const { param } = router.query;

  // params === ['a', 'b', 'c']

  return <h1>{`hello ${param}`}</h1>;
};
