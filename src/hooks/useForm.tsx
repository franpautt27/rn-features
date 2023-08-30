import React, { useState } from "react";

const useForm = <T extends object>(initState: T) => {
  const [state, setState] = useState(initState);
  type FieldNamesType = keyof typeof state;
  function onChange<K extends Object>(value: K, fieldName: FieldNamesType) {
    setState({
      ...state,
      [fieldName]: value,
    });
  }
  return {
    form: state,
    onChange,
  };
};

export default useForm;
