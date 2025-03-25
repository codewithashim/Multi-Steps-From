import { useMutation } from "@tanstack/react-query";
import { RegistrationSchema } from "../schemas/registrationSchema";
import { toast } from "react-toastify";

const submitRegistration = async (data: RegistrationSchema) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));  
  console.log("API Submission:", data);
  return { success: true, message: "Registration submitted successfully" };
};

export function useSubmitRegistration() {
  return useMutation({
    mutationFn: submitRegistration,
    onSuccess: (response) => {
      toast.success(response.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
    onError: (error) => {
      toast.error("Submission failed: " + error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
  });
}
