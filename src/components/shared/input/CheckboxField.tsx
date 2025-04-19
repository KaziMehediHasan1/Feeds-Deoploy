import React from "react";
import { FieldValues, UseFormRegister, Path } from "react-hook-form";

interface CheckboxFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  error?: string;
}

function CheckboxField<T extends FieldValues>({
  label,
  name,
  register,
  required = false,
  error,
}: CheckboxFieldProps<T>) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={name}
        {...register(name, { required: required })}
        className="h-4 w-4 border border-gray-300 rounded"
      />
      <label htmlFor={name} className="text-sm font-semibold text-[#1d75a3]">
        {label}
        {required && <span className="text-[#1d75a3]">*</span>}
      </label>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}

export default CheckboxField;
