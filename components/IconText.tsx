import { LucideIcon } from "lucide-react";

interface IconTextProps {
  icon: LucideIcon;
  text: string;
}

const IconText: React.FC<IconTextProps> = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center space-x-2">
      <Icon className="h-5 w-5 text-gray-700" />
      <span className="text-gray-900">{text}</span>
    </div>
  );
};

export default IconText;
