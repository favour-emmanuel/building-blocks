"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ExternalLinkProps {
  url: string;
  children?: React.ReactNode;
}

const ExternalLinkComponent: React.FC<ExternalLinkProps> = ({
  url,
  children,
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 hover:underline"
      aria-label="Opens in a new tab"
    >
      {children}
      <ExternalLink className="h-4 w-4" />
    </Link>
  );
};

export default ExternalLinkComponent;
