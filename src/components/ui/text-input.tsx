import React, { forwardRef, InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, placeholder, type = "text", ...props }, ref) => {
    return (
      <div className="relative my-6">
        <label className="text-sm">
          {label}
          {props.required && <span className="text-red-500">*</span>}
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className="peer relative h-12 w-full rounded border border-slate-200 px-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            {...props}
          />
        </label>
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
