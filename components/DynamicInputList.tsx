"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";

interface DynamicInputListProps {
  value?: (string | number | null)[];
  fieldAttrs?: Record<string, any>;
  addButtonText?: string;
  onChange?: React.Dispatch<React.SetStateAction<(string | number | null)[]>>;
}

const DynamicInputList: React.FC<DynamicInputListProps> = ({
  value = [],
  fieldAttrs = {},
  addButtonText,
  onChange,
}) => {
  const [values, setValues] = useState<(string | number | null)[]>(value);

  useEffect(() => {
    setValues(value);
  }, [value]);

  const addField = () => {
    const newValues = [...values, ""];
    setValues(newValues);
    onChange?.(newValues);
  };

  const deleteField = (index: number) => {
    const newValues = values.filter((_, i) => i !== index);
    setValues(newValues);
    onChange?.(newValues);
  };

  const setField = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
    onChange?.(newValues);
  };

  return (
    <div className="space-y-4">
      {values.length > 0 &&
        values.map((v, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              value={v || ""}
              onChange={(e) => setField(e, index)}
              {...fieldAttrs}
            />
            <Button
              variant="destructive"
              onClick={() => deleteField(index)}
              aria-label="Delete"
              type="button"
            >
              <Trash className="h-4 w-4 text-red-400" />
            </Button>
          </div>
        ))}
      <Button
        onClick={addField}
        variant="secondary"
        type="button"
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        {addButtonText || `Add ${fieldAttrs.label || "Field"}`}
      </Button>
    </div>
  );
};

export default DynamicInputList;
