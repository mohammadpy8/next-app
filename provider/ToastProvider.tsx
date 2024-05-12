"use client";

import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const ToastCustom = styled(ToastContainer)(() => ({
  "& .Toastify__toast--warning": {
    backgroundColor: "#fffa9a !important",
  },
  "& .Toastify__toast--success": {
    backgroundColor: "#92fe88 !important",
  },
  "& .Toastify__toast--error": {
    backgroundColor: "#ff7676 !important",
  },
}));

const ToastProvider = () => {
  return <ToastCustom position="top-center" rtl />;
};

export { ToastProvider };
