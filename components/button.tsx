"use client";

import { Button } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, ReactNode } from "react";

interface AppButtonProps {
  children: ReactNode;
}

export default function AppButton({ children }: AppButtonProps) {
  return (
    <Button as={Fragment}>
      {({ hover, active }) => (
        <button
          className={clsx(
            "rounded-full py-2 px-4 text-sm text-white",
            !hover && !active && "bg-blue-500",
            hover && !active && "bg-blue-600",
            active && "bg-sky-700"
          )}
        >
          {children}
        </button>
      )}
    </Button>
  );
}
