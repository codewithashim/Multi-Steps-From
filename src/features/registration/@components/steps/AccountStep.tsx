import { FormInput } from "@/components/FormInput";
import { useRegistrationContext } from "@/context/RegistrationContext";

export default function AccountStep() {
  const { form } = useRegistrationContext();
  const {
    register,
    formState: { errors },
    getValues,
  } = form;

  // Get the form values for the summary
  const formData = getValues();

  return (
    <div className="space-y-4">
      <FormInput
        label="Username"
        register={register("account.username")}
        error={errors.account?.username?.message}
      />
      <FormInput
        label="Password"
        type="password"
        register={register("account.password")}
        error={errors.account?.password?.message}
      />
      <FormInput
        label="Confirm Password"
        type="password"
        register={register("account.confirmPassword")}
        error={errors.account?.confirmPassword?.message}
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Summary
        </h3>
        <div className="mt-2 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-800 dark:text-gray-200">
          <h4 className="font-medium text-gray-900 dark:text-gray-100">
            Personal Information
          </h4>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>
              Full Name: {formData.personalInfo.fullName || "Not provided"}
            </li>
            <li>Email: {formData.personalInfo.email || "Not provided"}</li>
            <li>Phone: {formData.personalInfo.phone || "Not provided"}</li>
          </ul>

          <h4 className="font-medium text-gray-900 dark:text-gray-100 mt-3">
            Address Details
          </h4>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Street: {formData.address.street || "Not provided"}</li>
            <li>City: {formData.address.city || "Not provided"}</li>
            <li>Zip Code: {formData.address.zipCode || "Not provided"}</li>
          </ul>

          <h4 className="font-medium text-gray-900 dark:text-gray-100 mt-3">
            Account Setup
          </h4>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Username: {formData.account.username || "Not provided"}</li>
            <li>Password: [Hidden for security]</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
