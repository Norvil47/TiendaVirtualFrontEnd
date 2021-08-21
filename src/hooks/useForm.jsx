import { useState } from "react";


export function useForm(initialState) {
  const [values, setvalues] = useState(initialState);

  const handleinputChange = ( e ) => {      
    setvalues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
 

  return [values, handleinputChange,];
}
