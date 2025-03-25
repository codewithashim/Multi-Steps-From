/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import PersonalInfoStep from "./steps/PersonalInfoStep";
import AddressStep from "./steps/AddressStep";
import AccountStep from "./steps/AccountStep";
import FormNavigation from "./FormNavigation";
import { Card } from "@/components/Card";
import { useSubmitRegistration } from "../api/useSubmitRegistration";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useRegistrationForm } from "@/hooks/useRegistrationForm";
import { RegistrationProvider } from "@/context/RegistrationContext";

const queryClient = new QueryClient();

export default function FormContainer() {
  const { form, currentStep, setCurrentStep, totalSteps, nextStep, prevStep } =
    useRegistrationForm();
  const { mutate: submitForm, isPending } = useSubmitRegistration();

  const handleSubmit = (data: any) => submitForm(data);

  const steps = [
    <PersonalInfoStep key="personal" />,
    <AddressStep key="address" />,
    <AccountStep key="account" />,
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <RegistrationProvider
        form={form}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={totalSteps}
      >
        <Card className="w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Registration - Step {currentStep}/{totalSteps}
            </h1>
            <ThemeToggle />
          </div>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            {steps[currentStep - 1]}
            <FormNavigation
              onNext={nextStep}
              onPrev={prevStep}
              isSubmitting={isPending}
            />
          </form>
        </Card>
      </RegistrationProvider>
    </QueryClientProvider>
  );
}
