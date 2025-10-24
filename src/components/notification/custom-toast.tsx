"use client";

import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";
import toast from "react-hot-toast";

interface CustomToastProps {
  message: string;
  type: "success" | "error" | "warning" | "info";
  icon?: string;
}

export const showCustomToast = ({ message, type, icon }: CustomToastProps) => {
  const getIcon = () => {
    if (icon) return icon;

    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200";
      case "error":
        return "bg-red-50 border-red-200";
      case "warning":
        return "bg-yellow-50 border-yellow-200";
      case "info":
        return "bg-blue-50 border-blue-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getTextColor = () => {
    switch (type) {
      case "success":
        return "text-green-800";
      case "error":
        return "text-red-800";
      case "warning":
        return "text-yellow-800";
      case "info":
        return "text-blue-800";
      default:
        return "text-gray-800";
    }
  };

  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } w-full max-w-md ${getBackgroundColor()} pointer-events-auto flex rounded-lg shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="w-0 flex-1 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">{getIcon()}</div>
            <div className="ml-3 flex-1">
              <p className={`font-medium text-sm ${getTextColor()}`}>
                {message}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-gray-200 border-l">
          <button
            className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 font-medium text-gray-600 text-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => toast.dismiss(t.id)}
          >
            ×
          </button>
        </div>
      </div>
    ),
    {
      duration: type === "error" ? 5000 : 3000,
    }
  );
};

// Convenience functions
export const showSuccessToast = (message: string, icon?: string) =>
  showCustomToast({ message, type: "success", icon });

export const showErrorToast = (message: string, icon?: string) =>
  showCustomToast({ message, type: "error", icon });

export const showWarningToast = (message: string, icon?: string) =>
  showCustomToast({ message, type: "warning", icon });

export const showInfoToast = (message: string, icon?: string) =>
  showCustomToast({ message, type: "info", icon });
