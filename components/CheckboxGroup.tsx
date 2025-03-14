"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Option {
  value: any;
  text: string;
}

interface CheckboxGroupProps {
  options: Option[];
  value?: any[];
  onChange?: (values: any[]) => void;
  name?: string;
  id?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  value = [],
  onChange,
  name,
  id,
}) => {
  const [selectedValues, setSelectedValues] = useState<any[]>(value);

  const handleToggle = (optionValue: any) => {
    const newValues = selectedValues.includes(optionValue)
      ? selectedValues.filter((v) => v !== optionValue)
      : [...selectedValues, optionValue];
    setSelectedValues(newValues);
    onChange?.(newValues);
  };

  return (
    <div className="space-y-2">
      {options.map((option, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Checkbox
            id={`${id || name}-${index}`}
            checked={selectedValues.includes(option.value)}
            onCheckedChange={() => handleToggle(option.value)}
          />
          <Label htmlFor={`${id || name}-${index}`}>{option.text}</Label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
