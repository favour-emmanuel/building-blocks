"use client";

import Image from "next/image";

interface ImageComponentProps extends React.ComponentProps<typeof Image> {
  lazy?: boolean;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  lazy = false,
  ...props
}) => {
  return <Image {...props} loading={lazy ? "lazy" : "eager"} />;
};

export default ImageComponent;
