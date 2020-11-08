import * as React from 'react';

function Add(props) {
  return (
    <svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm11 1h4v-2h-4V7h-2v4H7v2h4v4h2v-4z'
        fill='#2E3A59'
      />
    </svg>
  );
}

export default Add;
