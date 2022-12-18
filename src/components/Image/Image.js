import React from 'react';
import NextImage from 'next/image';

import {Picture} from '@/ui/Picture';

export const Image = ({src, title}) => {
  return (
    <Picture title={title}>
      <NextImage src={src} />
    </Picture>
  );
};
