import { StaticImageData } from 'next/image';

export interface ImageConfig {
  src: StaticImageData;
  title: string;
  width: number;
  height: number;
}
