import { clsxMerge } from "@/shared/utils/clsxMerge";
import { cva } from "class-variance-authority";

export const notifyAlertVariants = cva(
  clsxMerge(
    "py-4 px-2.5 min-w-64 max-w-96 min-h-24 [&_p]:text-zinc-600",
    "[&_h3]:text-zinc-700 [&_h3]:dark:text-white [&_p]:dark:text-white",
    "rounded-md border-t-2"
  ),
  {
    variants: {
      variant: {
        success: clsxMerge(
          "border-green-400 text-green-400",
          "bg-green-100 dark:bg-green-800 dark:text-green-200"
        ),
        error: clsxMerge(
          "border-red-primary text-red-primary bg-red-100",
          "dark:bg-red-800 dark:text-red-200"
        ),
        loading: clsxMerge(
          "border-indigo-400 text-indigo-400 bg-indigo-100",
          "dark:bg-indigo-800 dark:text-indigo-200"
        ),
        warning: clsxMerge(
          "border-yellow-400 text-yellow-400 bg-yellow-100",
          "dark:bg-yellow-800 dark:text-yellow-200"
        ),
      },
    },
    defaultVariants: {
      variant: "success",
    }
  }
)