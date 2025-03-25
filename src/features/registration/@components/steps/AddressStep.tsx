import { FormInput } from "@/components/FormInput";
import { useRegistrationContext } from "@/context/RegistrationContext";

export default function AddressStep() {
  const { form } = useRegistrationContext();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-4">
      <FormInput
        label="Street Address"
        register={register("address.street")}
        error={errors.address?.street?.message}
      />
      <FormInput
        label="City"
        register={register("address.city")}
        error={errors.address?.city?.message}
      />
      <FormInput
        label="Zip Code"
        register={register("address.zipCode")}
        error={errors.address?.zipCode?.message}
      />
    </div>
  );
}
