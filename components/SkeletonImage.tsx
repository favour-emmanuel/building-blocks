import React from "react";
import { Skeleton } from "./ui/skeleton";

interface SkeletonImageProps {
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "wave";
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({
  width = "100%",
  height = "100%",
  animation = "pulse",
  className = "",
  style = {},
  children,
  ...props
}) => {
  return (
    <Skeleton
      style={{ width, height, ...style }}
      className={`${
        animation === "wave" ? "animate-wave" : "animate-pulse"
      } ${className}`}
    >
      {children}
    </Skeleton>
  );
};

export default SkeletonImage;
