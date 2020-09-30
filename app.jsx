import React from 'react';

import  { styled } from './stitches.config';

const Paragraph = styled('p', {
  color: 'red',
  variants: {
    var1: { true: { color: 'green' }, false: {} },
    var2: { true: { color: 'blue' }, false: {} },
  }
});

Paragraph.compoundVariant({ var1: true, var2: false }, { fontWeight: 'bold' })

Paragraph.compoundVariant({ var1: false, var2: true }, { textDecoration: 'underline' })

Paragraph.defaultProps = {
  var1: false,
  var2: false,
};

export function App() {
  return (
    <div>
      <Paragraph>Test</Paragraph>
      <Paragraph var1>Test</Paragraph>
      <Paragraph var2>Test</Paragraph>
    </div>
  )
}
