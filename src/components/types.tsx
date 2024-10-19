import { StaticImageData } from 'next/image';
import React, { forwardRef } from 'react';
import NextLink, { LinkProps } from "next/link";
import { ImageFit, ImageSource, SlideImage } from 'yet-another-react-lightbox';


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

export interface AggregatedSlideImage extends SlideImage {
  parentIndex: number;
  childIndex: number;
  index: number;
  /** image URL */
  src: string;
  /** image 'alt' attribute */
  alt?: string;
  /** image width in pixels */
  width?: number;
  /** image height in pixels */
  height?: number;
  /** `object-fit` setting */
  imageFit?: ImageFit;
  /** alternative images to be passed to the 'srcSet' */
  srcSet?: ImageSource[];
}

export function toSlideImages(imageConfigs: ImageConfig[]): SlideImage[] {
  return imageConfigs.map(({ src, width, height }) => ({
    width,
    height,
    src: src.src,
  }));
}

export function toAggregatedSlideImages(imageConfigsArrays: ImageConfig[][]): AggregatedSlideImage[][] {
  let key = 0;

  return imageConfigsArrays.map(
    (v, parentIndex) =>
      v.map(({ src, width, height }, childIndex) =>
      ({
        parentIndex,
        childIndex,
        index: key++,
        width,
        height,
        src: src.src,
      })));
}