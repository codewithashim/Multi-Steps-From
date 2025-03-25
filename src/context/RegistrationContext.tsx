/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { RegistrationSchema } from "@/features/registration/schemas/registrationSchema";
import { createContext, useContext, ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

interface RegistrationContextType {
  form: UseFormReturn<RegistrationSchema>;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  totalSteps: number;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(
  undefined
);

export function RegistrationProvider({
  children,
  form,
  currentStep,
  setCurrentStep,
  totalSteps,
}: {
  children: ReactNode;
  form: UseFormReturn<RegistrationSchema>;
  currentStep: number;
  setCurrentStep: (step: any) => void;
  totalSteps: number;
}) {
  return (
    <RegistrationContext.Provider
      value={{ form, currentStep, setCurrentStep, totalSteps }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistrationContext() {
  const context = useContext(RegistrationContext);
  if (!context)
    throw new Error(
      "useRegistrationContext must be used within a RegistrationProvider"
    );
  return context;
}
