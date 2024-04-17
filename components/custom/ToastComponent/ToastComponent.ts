import { toast } from "react-toastify";

type toastType = "ERROR" | "SUCCESS" | "WARNING";

const ToastComponent = (toastType: toastType, toastText: string, toastTime?: number) => {
  switch (toastType) {
    case "ERROR":
      return toast.error(toastText, { autoClose: toastTime || 2500 });
    case "SUCCESS":
      return toast.success(toastText, { autoClose: toastTime || 2500 });
    case "WARNING":
      return toast.warning(toastText, { autoClose: toastTime || 2500 });
    default:
      throw new Error("Unknown toast type");
  }
};

export { ToastComponent };
