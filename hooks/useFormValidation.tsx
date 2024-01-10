import { useEffect, useState } from "react";
import { checkRequired } from "@/lib/todo/validation";

export const useFormValidation = () => {
  const [titleValue, setTitleValue] = useState("");
  const [completedValue, setCompletedValue] = useState("");
  const [formErrorMessages, setFormErrorMessages] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const validateValue = (value: string) => {
    return checkRequired(value);
  };

  useEffect(() => {
    const initialTitleErrorMessage = validateValue(titleValue);
    const initialCompletedErrorMessage = validateValue(completedValue);
    setFormErrorMessages((prevState) => {
      const newState = [...prevState];
      newState[0] = initialTitleErrorMessage;
      newState[1] = initialCompletedErrorMessage;
      return newState;
    });
  }, [titleValue, completedValue]);

  useEffect(() => {
    setIsDisabled(formErrorMessages.some((message) => message !== ""));
  }, [formErrorMessages]);

  return {
    titleValue,
    setTitleValue,
    completedValue,
    setCompletedValue,
    isDisabled,
  };
};
