import { useState } from "react";

const steps = [
  {
    label: "1 x",
    value: "1",
  },
  {
    label: "2 x",
    value: "2",
  },
  {
    label: "3 x",
    value: "3",
  },
  {
    label: "4 x",
    value: "4",
  },
  {
    label: "5 x",
    value: "5",
  },
];

export default function Main() {
  const [currentStep, setCurrentStep] = useState(steps[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setCurrentStep(event.target.value);
  };

  const handlePrevNext = (direction: "prev" | "next") => {
    const currentIndex = steps.findIndex((step) => step.value === currentStep);

    if (direction === "next" && currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].value);
    }

    if (direction === "prev" && currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].value);
    }
  };

  return (
    <div>
      <select value={currentStep} onChange={handleChange}>
        {steps.map((step) => (
          <option key={step.value} value={step.value}>
            {step.label}
          </option>
        ))}
      </select>

      <button onClick={() => handlePrevNext("next")}>Next</button>
      <button onClick={() => handlePrevNext("prev")}>Previous</button>

      <h3>Current step: {currentStep}</h3>
    </div>
  );
}
