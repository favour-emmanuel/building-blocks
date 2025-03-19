"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

interface StackedImagesProps {
  files: { url: string }[] | string[];
  maxDisplay?: number;
}

const StackedImages: React.FC<StackedImagesProps> = ({
  files,
  maxDisplay = 3,
}) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    setImageUrls(
      Array.isArray(files)
        ? files.map((file) => (typeof file === "string" ? file : file.url))
        : []
    );
  }, [files]);

  return (
    <div className="relative flex items-center h-10">
      {imageUrls.slice(0, maxDisplay).map((url, index) => (
        <div
          key={index}
          className="absolute"
          style={{ left: `${index * 12}px`, zIndex: maxDisplay - index }}
        >
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            width={40}
            height={40}
            className="rounded-full border-2 border-background"
            loading="lazy"
          />
        </div>
      ))}

      {imageUrls.length > maxDisplay && (
        <div
          className="absolute"
          style={{ left: `${maxDisplay * 12}px`, zIndex: 1 }}
        >
          <Avatar className="w-10 h-10 border-2 border-background">
            <AvatarFallback>+{imageUrls.length - maxDisplay}</AvatarFallback>
          </Avatar>
        </div>
      )}
    </div>
  );
};

export default StackedImages;
