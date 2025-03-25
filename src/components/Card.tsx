import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg", className)}>
      {children}
    </div>
  );
}