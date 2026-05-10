import NextImage, { ImageProps as NextImageProps } from "next/image";

type ImageProps = Omit<NextImageProps, "alt"> & {
  /** Alt text is required for accessibility **/
  alt: string;
};

export const Image = ({ alt, ...props }: ImageProps) => {
  return <NextImage alt={alt} {...props} />;
};
