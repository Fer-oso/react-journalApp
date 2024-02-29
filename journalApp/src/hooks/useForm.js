import { useEffect, useState } from "react";

export const useForm = (initialState = {}, validations = {}) => {
  const [formState, setFormState] = useState(initialState);

  const [formValidations, setFormValidations] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

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
  };
};
