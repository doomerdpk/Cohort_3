import { useRef } from "react";

export function useDebounce(RequestToBackend) {
  const clock = useRef(); //Global Timer variable

  function debounce() {
    clearTimeout(clock.current);
    clock.current = setTimeout(RequestToBackend, 1000);
  }

  return debounce;
}
