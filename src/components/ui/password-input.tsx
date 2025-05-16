"use client";
import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, placeholder, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative ">
        <label htmlFor="password-input" className="text-sm ">
          {label} <span className="text-red-500">*</span>
          <input
            id="password-input"
            ref={ref}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className="peer relative h-12 w-full rounded border border-slate-200 px-4 pr-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            {...props}
          />
          {showPassword ? (
            <Eye
              className="absolute top-9 right-4 h-6 w-6 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <EyeOff
              className="absolute top-9 right-4 h-6 w-6 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
              onClick={togglePasswordVisibility}
            />
          )}
        </label>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
