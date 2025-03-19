import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PanelProps {
  title?: string;
  titleIcon?: keyof typeof LucideIcons;
  titleTag?: React.ElementType;
  noHeader?: boolean;
  noPadding?: boolean;
  padding?: number | string;
  shadow?: boolean;
  notRounded?: boolean;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

const Panel: React.FC<PanelProps> = ({
  title,
  titleIcon,
  titleTag: TitleTag = "h3",
  noHeader = false,
  noPadding = false,
  padding = 4,
  shadow = false,
  notRounded = false,
  children,
  actions,
}) => {
  const IconComponent = titleIcon
    ? (LucideIcons[titleIcon] as LucideIcon)
    : null;

  return (
    <Card
      className={cn(shadow && "shadow-md", !notRounded && "rounded-lg")}
      style={{ padding: noPadding ? 0 : `${padding}rem` }}
    >
      {/* Header */}
      {!noHeader && (
        <CardHeader className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center space-x-2">
            {IconComponent && <IconComponent className="w-5 h-5" />}
            <TitleTag className="font-semibold text-lg">{title}</TitleTag>
          </div>
          {actions && <div>{actions}</div>}
        </CardHeader>
      )}

      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default Panel;
