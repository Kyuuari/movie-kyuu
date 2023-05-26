"use client";
import React, { useState, useEffect } from "react";

// Custom hook for managing local storage interactions
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (newValue: T) => void] {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get the value from local storage or use the initial value
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        setValue(JSON.parse(storedValue));
      }
    }
  }, []);

  // Update the value in local storage and state
  const updateValue = (newValue: T) => {
    setValue(newValue);
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  return [value, updateValue];
}
