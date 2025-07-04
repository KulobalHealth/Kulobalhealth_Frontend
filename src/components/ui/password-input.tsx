"use client";
import { Eye, EyeOff } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  name,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="relative ">
        <label className="text-sm ">
          {label} <span className="text-red-500">*</span>
          <input
            className="peer relative h-12 w-full rounded border border-slate-200 px-4 pr-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            type={showPassword ? "text" : "password"}
            value={value}
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
    </>
  );
}
