"use client";
import { ITextInputProps } from "@/shared/types";
import React, { useCallback } from "react";

const TextInput = ({
  value,
  onChange,
  className = "",
  label,
  ...props
}: ITextInputProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div className="w-full mb-6">
      {label && (
        <label className="block text-[18px] text-[#1D1D1D] mb-2 leading-[133%]">
          {label}
        </label>
      )}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={`w-full pl-[6px] py-[11px] border border-[#D4D4D4] rounded-[4px] focus:outline-none focus:border-orange-500 ${className}`}
        {...props}
      />
    </div>
  );
};

export default React.memo(TextInput);
