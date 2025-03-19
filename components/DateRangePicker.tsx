"use client";

interface DateRangePickerProps {
  value: [Date, Date];
  onChange: (dates: [Date, Date]) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder="Select date range"
      className="border p-2 rounded"
      onChange={() => onChange([new Date(), new Date()])} // Replace with actual logic
    />
  );
};

export default DateRangePicker;
