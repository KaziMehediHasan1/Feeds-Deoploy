import React from "react";
import { FieldValues, UseFormRegister, Path } from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  required?: boolean;
  error?: string;
}

function InputField<T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder = "",
  register,
  required = false,
  error,
}: InputFieldProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-semibold text-black">
        {label}
        {required && <span className="text-black">*</span>}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, { required: required })}
        className="border p-1 rounded-sm"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}

export default InputField;
