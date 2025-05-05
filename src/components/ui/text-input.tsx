import React from "react"

interface TextInputProps {
    label?: string
    placeholder?: string
    
}
export default function TextInput({label, placeholder}: TextInputProps) {

    return (
            <div className="relative my-6">
                <label className="text-sm">{label}<span className="text-red-500">*</span>
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="peer relative h-12 w-full rounded border border-slate-200 px-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        required 
                    />


                </label>
               
                
            </div>

    )
}
