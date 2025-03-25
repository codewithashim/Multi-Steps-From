import { FormInput } from "@/components/FormInput";
import { useRegistrationContext } from "@/context/RegistrationContext";

export default function PersonalInfoStep() {
  const { form } = useRegistrationContext();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-4">
      <FormInput
        label="Full Name"
        register={register("personalInfo.fullName")}
        error={errors.personalInfo?.fullName?.message}
      />
      <FormInput
        label="Email"
        type="email"
        register={register("personalInfo.email")}
        error={errors.personalInfo?.email?.message}
      />
      <FormInput
        label="Phone Number"
        register={register("personalInfo.phone")}
        error={errors.personalInfo?.phone?.message}
      />
    </div>
  );
}
