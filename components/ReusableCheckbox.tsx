"use client";

import { useState, useId } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CheckboxProps {
  name?: string;
  size?: "sm" | "md" | "lg";
  value?: boolean | string | number;
  switch?: boolean;
  onChange?: (value: boolean) => void;
}

const ReusableCheckbox: React.FC<CheckboxProps> = ({
  name,
  size = "lg",
  value = false,
  switch: isSwitch = true,
  onChange,
}) => {
  const [checked, setChecked] = useState(!!value);
  const id = useId();

  const handleToggle = (newValue: boolean) => {
    setChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex items-center space-x-2">
      {isSwitch ? (
        <Switch
          id={id}
          checked={checked}
          onCheckedChange={handleToggle}
          className={`scale-${size} text-black`}
        />
      ) : (
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={handleToggle}
          className={`scale-${size}`}
        />
      )}
      {name && (
        <Label htmlFor={id} className="text-sm">
          {name}
        </Label>
      )}
    </div>
  );
};

export default ReusableCheckbox;
