"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Filter, RefreshCw } from "lucide-react";
import DateRangePicker from "@/components/DateRangePicker";
import DurationPicker from "@/components/DurationPicker";

interface FilterPanelProps {
  store: {
    filters: {
      dates: [Date, Date];
      duration: string;
    };
    resetFilter: () => void;
    setFilters: (filters: { dates: [Date, Date]; duration: string }) => void;
  };
  panelAttrs?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
  onFilter: (filters: { dates: [Date, Date]; duration: string }) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  store,
  panelAttrs,
  children,
  onFilter,
}) => {
  const handleFilter = () => {
    onFilter(store.filters);
  };

  return (
    <Card {...panelAttrs} className="mb-3 p-4">
      <div className="flex flex-wrap items-center gap-4">
        <DateRangePicker
          value={store.filters.dates}
          onChange={(dates) => (store.filters.dates = dates)}
        />

        <DurationPicker
          value={store.filters.duration}
          onChange={(duration) => (store.filters.duration = duration)}
          onRangeChange={(dates) => (store.filters.dates = dates)}
        />

        <Button
          variant="default"
          onClick={handleFilter}
          className="flex items-center"
        >
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>

        <Button
          variant="outline"
          onClick={store.resetFilter}
          className="flex items-center"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </Card>
  );
};

export default FilterPanel;
