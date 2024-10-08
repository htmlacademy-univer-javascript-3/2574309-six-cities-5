import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface UseAppFormT<T extends Record<string, any>> {
  initialData: T;
  onSubmit: (values?: T) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAppForm = <T extends Record<string, any>>({
  initialData,
  onSubmit,
}: UseAppFormT<T>) => {
  const [values, setValues] = useState(initialData);

  const resetForm = () => setValues(initialData);

  const setFieldValue = (name: keyof T, value: T[keyof T]) => setValues((prevState) => ({...prevState, [name]: value}));

  const handleSubmit = () => {
    onSubmit(values);
  };

  return {values, resetForm, setValues ,setFieldValue, handleSubmit};

};
