import { useState } from 'react';

function useStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error retrieving from localStorage: ${error}`);
      return initialValue; // Return initial value if JSON parsing fails
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting to localStorage: ${error}`);
    }
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`Error removing from localStorage: ${error}`);
    }
  };

  return [storedValue, setValue, removeValue];
}

export default useStorage;
