"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "./ui/label";

interface InputProps {
  type?: string;
  prepend?: string;
  append?: string;
  appendComponent?: React.ReactNode;
  maskable?: boolean;
  text?: string;
  placeHolder?: string;
}

const InputGroupComponent: React.FC<InputProps> = ({
  type = "text",
  append,
  prepend,
  appendComponent,
  maskable = false,
  text,
  placeHolder = "",
}) => {
  const [dataType, setDataType] = useState(type);

  const toggleMask = () => {
    setDataType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {text && <Label className="text-sm">{text}</Label>}

      <div className="flex items-center">
        {prepend && <span className="mr-2">{prepend}</span>}

        <Input type={dataType} placeholder={placeHolder} />

        {maskable && (
          <div className="ml-2">
            <Button type="button" onClick={toggleMask} aria-label="Toggle mask">
              {dataType === "password" ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </Button>
          </div>
        )}

        {append && <span className="ml-2">{append}</span>}

        {appendComponent && <div className="ml-2">{appendComponent}</div>}
      </div>
    </div>
  );
};

export default InputGroupComponent;
