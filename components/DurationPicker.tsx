"use client";

interface DurationPickerProps {
  value: string;
  onChange: (duration: string) => void;
  onRangeChange: (dates: [Date, Date]) => void;
}

const DurationPicker: React.FC<DurationPickerProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Select duration"
      className="border p-2 rounded"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default DurationPicker;
