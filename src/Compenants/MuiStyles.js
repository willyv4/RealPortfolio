import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SimpleMediaQuery() {
  const matches = useMediaQuery('(max-width:600px)');

  return <span>{`(max-width:600px) matches: ${matches}`}</span>;
}
