import React from "react";
import toast from "react-hot-toast";
import { nanoid } from "nanoid";
import type { NotifyAlertProps } from "../NotifyAlert.component";
import NotifyAlert from "../NotifyAlert.component";

export async function showNotifyAlertWithPromise<T>(
  promise: Promise<T>,
  options: {
    loading: {
      title?: string;
      message: string;
    };
    success: {
      title?: string;
      message: string;
    };
    error: {
      title?: string;
      message: string;
    };
  }
): Promise<T> {

  const toastId = nanoid(); // Generate a custom id
  const resetDefaultStyles = { // Overwrite default container style
    style: {
      padding: 0,
      margin: 0,
      background: "none",
      boxShadow: "none",
    },
    icon: null,
  };


  return toast.promise(
    promise,
    {
      loading: React.createElement(
        NotifyAlert,
        {
          toastId,
          variant: "loading",
          title: options.loading.title,
          message: options.loading.message
        }
      ),
      success: React.createElement(
        NotifyAlert,
        {
          toastId,
          variant: "success",
          title: options.success.title,
          message: options.success.message
        }
      ),
      error: React.createElement(
        NotifyAlert,
        {
          toastId,
          variant: "error",
          title: options.error.title,
          message: options.error.message
        }
      ),
    },
    {
      id: toastId,
      position: "top-right",
      success: resetDefaultStyles,
      error: resetDefaultStyles,
      loading: resetDefaultStyles
    }
  );
}

export function showNotifyAlert(opts: Omit<NotifyAlertProps, "toastId">) {
  const resetDefaultStyles = { // Overwrite default container style
    style: {
      padding: 0,
      margin: 0,
      background: "none",
      boxShadow: "none",
    },
    icon: null,
  };

  return toast(
    (t) => (
      React.createElement(
        NotifyAlert,
        { toastId: t.id, ...opts }
      )
    ),
    resetDefaultStyles
  );
}