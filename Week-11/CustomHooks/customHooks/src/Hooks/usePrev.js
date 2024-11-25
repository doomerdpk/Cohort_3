import { useRef, useEffect } from "react";

export function usePrev(value) {
  const valueRef = useRef();

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return {
    prevValue: valueRef.current,
  };
}

//Point to Note: Fiest prevValue will returned and then useEffect will run
