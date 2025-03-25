import { useMutation } from "@tanstack/react-query";
import { RegistrationSchema } from "../schemas/registrationSchema";

// Simulated API call
const submitRegistration = async (data: RegistrationSchema) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
  console.log("API Submission:", data);
  return { success: true, message: "Registration submitted successfully" };
};

export function useSubmitRegistration() {
  return useMutation({
    mutationFn: submitRegistration,
    onSuccess: (response) => {
      alert(response.message);
    },
    onError: (error) => {
      alert("Submission failed: " + error.message);
    },
  });
}