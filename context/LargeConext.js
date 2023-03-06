import { createContext } from "react";
import { useState } from "react";

export const LargeContext = createContext();

export function LargeContextProvider({ children }) {
  const [isLarge, setIsLarge] = useState(false);
  function handleSetIsLarge(newValue) {
    setIsLarge(newValue);
  }

  return (
    <LargeContext.Provider
      value={{ isLarge: isLarge, onSetIsLarge: handleSetIsLarge }}
    >
      {children}
    </LargeContext.Provider>
  );
}
