import { StaticImageData } from 'next/image';
import React, { forwardRef } from 'react';
import NextLink, { LinkProps } from "next/link";
import { SlideImage } from 'yet-another-react-lightbox';


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

const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [3840];

function nextImageUrl(src: StaticImageData, size: number) {
  return `/_next/image?url=${src.src}&w=${size}&q=75`;
}

export function toSlideImages(imageConfigs : ImageConfig[] )  : SlideImage[] {
  return imageConfigs.map(({ src, width, height }) => ({
    width,
    height,
    src: src.src,
  }));
}

export function toSlideImages2(imageConfigs : ImageConfig[] ) : SlideImage[] {
  return imageConfigs.map(({ src, width, height }) => ({
    width,
    height,
    src: nextImageUrl(src, width),
    srcSet: [...imageSizes, ...deviceSizes]
      .filter((size) => size <= width)
      .map((size) => ({
        src: nextImageUrl(src, size),
        width: size,
        height: Math.round((height / width) * size),
      })),
  }));
}
