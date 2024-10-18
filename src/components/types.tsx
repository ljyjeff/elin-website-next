import { StaticImageData } from 'next/image';
import React, { forwardRef } from 'react';
import NextLink, { LinkProps } from "next/link";


export interface ImageConfig {
  src: StaticImageData;
  title: string;
  width: number;
  height: number;
}

export const LinkBehaviour = forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
  }
);
