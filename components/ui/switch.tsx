"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-[1.5rem] w-10 shrink-0 items-center rounded-full border border-transparent shadow-md transition-all outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
        "bg-gray-400 data-[state=checked]:bg-[#FC6401]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-5 rounded-full bg-white shadow-md ring-0 transition-transform",
          "data-[state=checked]:translate-x-[1.3rem] data-[state=unchecked]:translate-x-0 border border-gray-300"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
