/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  RegistrationSchema,
} from "@/features/registration/schemas/registrationSchema";

export function useRegistrationForm() {
  const [currentStep, setCurrentStep] =
    useState<keyof typeof stepsValidation>(1);
    
  const totalSteps = 3;

  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues: {
      personalInfo: { fullName: "", email: "", phone: "" },
      address: { street: "", city: "", zipCode: "" },
      account: { username: "", password: "", confirmPassword: "" },
    },
  });

  const stepsValidation = {
    1: ["personalInfo.fullName", "personalInfo.email", "personalInfo.phone"],
    2: ["address.street", "address.city", "address.zipCode"],
    3: ["account.username", "account.password", "account.confirmPassword"],
  } as const;

  const nextStep = async () => {
    const isValid = await form.trigger(stepsValidation[currentStep] as any);
    if (isValid && currentStep < totalSteps)
      setCurrentStep((prev) => (prev + 1) as keyof typeof stepsValidation);
  };

  const prevStep = () => {
    if (currentStep > 1)
      setCurrentStep((prev) => (prev - 1) as keyof typeof stepsValidation);
  };

  return { form, currentStep, setCurrentStep, totalSteps, nextStep, prevStep };
}
