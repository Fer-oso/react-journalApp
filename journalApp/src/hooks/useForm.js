import { useEffect, useMemo, useState } from "react";

export const useForm = (initialState = {}, validations = {}) => {
  const [formState, setFormState] = useState(initialState);

  const [formValidations, setFormValidations] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);


  const isFormValid = useMemo(() => {

    for (const formValue of Object.keys(formValidations)) {
      if (formValidations[formValue] !== null) return false;
    }
    return true
  }, [formValidations])

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const createValidators = () => {
    const checkedValues = {};

    for (const formField of Object.keys(validations)) {

      const [fn, errorMessage] = validations[formField];

      checkedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidations(checkedValues);
  };

  return {
    formState,
    onInputChange,
    formValidations,
    isFormValid,
  };
};
