import React from 'react';

import  { styled } from './stitches.config';

const Paragraph = styled('p', {
  color: 'red',
});

export function App() {
  return (
    <div>
      <Paragraph>Test</Paragraph>
    </div>
  )
}
