"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EllipsisTextProps {
  text?: string;
  noTooltip?: boolean;
}

const EllipsisText: React.FC<EllipsisTextProps> = ({
  text,
  noTooltip = false,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="max-w-full truncate"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {text}
          </div>
        </TooltipTrigger>
        {!noTooltip && text && <TooltipContent>{text}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};

export default EllipsisText;
