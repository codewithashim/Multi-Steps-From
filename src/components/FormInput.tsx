import { cn } from "@/lib/cn";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label: string;
  error?: string;
  register: UseFormRegisterReturn;
  className?: string;
  type?: string;
}

export function FormInput({
  label,
  error,
  register,
  className,
  type = "text",
}: FormInputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <input
        {...register}
        type={type}
        className={cn(
          "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white",
          error && "border-red-500",
          className
        )}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
