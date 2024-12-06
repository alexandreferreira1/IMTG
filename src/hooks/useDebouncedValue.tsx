"use client";

import { useEffect, useState } from "react";

interface UseDebouncedValueProps {
  inputValue: string | number;
  delay?: number;
}

export const useDebouncedValue = ({
  inputValue,
  delay = 1000,
}: UseDebouncedValueProps) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};
