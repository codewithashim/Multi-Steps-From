import { Button } from "@/components/Button";
import { useRegistrationContext } from "@/context/RegistrationContext";

interface FormNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  isSubmitting: boolean;
}

export default function FormNavigation({
  onNext,
  onPrev,
  isSubmitting,
}: FormNavigationProps) {
  const { currentStep, totalSteps } = useRegistrationContext();

  return (
    <div className="flex justify-between">
      {currentStep > 1 && (
        <Button
          type="button"
          variant="secondary"
          onClick={onPrev}
          disabled={isSubmitting}
        >
          Previous
        </Button>
      )}
      {currentStep < totalSteps ? (
        <Button type="button" onClick={onNext} disabled={isSubmitting}>
          Next
        </Button>
      ) : (
        <Button type="submit" variant="success" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      )}
    </div>
  );
}
