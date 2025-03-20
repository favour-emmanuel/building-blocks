"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface Store {
  getComponents: (
    key: "TableFields" | "TableSlots" | "BeforeTable" | "TableActions"
  ) => (React.ReactNode | string)[];
  applyFilter: () => void;
  refresh: () => void;
  clearErrors: () => void;
  addFilter: (query: object) => void;
  busy: boolean;
  canTakeBulkAction: boolean;
}

interface TableLayoutProps {
  store: Store;
  layoutAttrs?: {
    title?: string;
    icon?: React.ReactNode;
  };
  tableAttrs?: {
    striped?: boolean;
    [key: string]: any;
  };
  modalAttrs?: object;
  autoLoad?: boolean;
  watch?: boolean;
}

interface SlotComponentProps {
  data?: any; // Adjust type if needed
}

const TableLayout: React.FC<TableLayoutProps> = ({
  store,
  layoutAttrs = {},
  tableAttrs = {},
  modalAttrs = {},
  autoLoad = true,
  watch = true,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [rowDetail, setRowDetail] = useState<any>(null);
  const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (item: any) => {
    setRowDetail(item);
    setModalTitle("Row Details");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (autoLoad) {
      store.applyFilter();
    }
  }, [autoLoad, store]);

  useEffect(() => {
    if (watch) {
      const queryObject = Object.fromEntries(searchParams.entries());

      store.addFilter(queryObject);
      store.applyFilter();
    }
  }, [watch, pathname, searchParams, store]);

  console.log("All Store Components:", store);

  return (
    <div className="space-y-4">
      {/* BeforeTable Components */}
      {store
        .getComponents("BeforeTable")
        ?.map((Component, index) =>
          Component && typeof Component !== "string" ? (
            <div key={index}>{Component}</div>
          ) : null
        )}

      <Card className="p-6 shadow-md" {...layoutAttrs}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            {layoutAttrs.title || "Table"}
          </h2>
          {layoutAttrs.icon && <span>{layoutAttrs.icon}</span>}
        </div>

        {/* Table Actions */}
        {store.getComponents("TableActions")?.length > 0 && (
          <div className="flex space-x-2 my-4">
            {store
              .getComponents("TableActions")
              .map((Component, index) =>
                Component && typeof Component !== "string" ? (
                  <div key={index}>{Component}</div>
                ) : null
              )}
          </div>
        )}

        {/* Table */}
        <Table
          className={`w-full ${tableAttrs.striped ? "even:bg-gray-50" : ""}`}
        >
          <thead>
            <tr>
              {store.getComponents("TableFields")?.map((Field, index) => (
                <th key={index} className="text-left py-2">
                  {React.isValidElement(Field) ? Field : null}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {store.getComponents("TableSlots")?.map((SlotComponent, index) => {
              if (!SlotComponent || typeof SlotComponent === "string")
                return null;
              return (
                <tr
                  key={index}
                  onClick={() => {
                    if (
                      React.isValidElement<SlotComponentProps>(SlotComponent)
                    ) {
                      handleRowClick(SlotComponent.props.data);
                    }
                  }}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  {SlotComponent}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{modalTitle}</DialogTitle>
          </DialogHeader>
          <pre className="text-sm">{JSON.stringify(rowDetail, null, 2)}</pre>
          <Button onClick={closeModal} variant="outline" className="mt-4">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TableLayout;
