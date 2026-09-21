import toast from "react-hot-toast";
import {
  BiSolidCheckCircle,
  BiSolidError,
  BiSolidErrorCircle
} from "react-icons/bi";
import { CgClose, CgSpinner } from "react-icons/cg";
import { notifyAlertVariants } from "./styles/variants.style";
import type { VariantProps } from "class-variance-authority";
import { clsxMerge } from "@/shared/utils/clsxMerge";

export type NotifyAlertProps = {
  title?: string;
  message: string;
  toastId: string;
  className?: string;
} & VariantProps<typeof notifyAlertVariants>;

function NotifyAlert({ className, variant, toastId, ...props }: NotifyAlertProps) {
  return (
    <div className={clsxMerge(
      "flex justify-between",
      notifyAlertVariants({ variant, className })
    )}>
      <div className={clsxMerge(
        "flex items-center gap-2",
        props.title ? "gap-2" : null
      )}>
        {/* Icon */}
        <span className="text-2xl">
          {({
            "success": <BiSolidCheckCircle />,
            "error": <BiSolidErrorCircle />,
            "loading": <CgSpinner className="animate-spin" />,
            "warning": <BiSolidError />
          })[variant ?? "success" as keyof typeof variant]}
        </span>

        {/* Spam alert */}
        <div className="flex flex-col gap-1">

          {/* Title */}
          {props.title ?
            <h3 className="text-lg">
              {props.title}
            </h3> : null}

          {/* Message */}
          <p className="font-normal text-sm text-pretty max-w-full">
            {props.message}
          </p>
        </div>
      </div>
      <button
        type="button"
        aria-label="Dismiss Notification"
        className="w-fit p-1.5"
        onClick={() => toast.dismiss(toastId)}
      >
        <CgClose />
      </button>
    </div>
  );
}

export default NotifyAlert;