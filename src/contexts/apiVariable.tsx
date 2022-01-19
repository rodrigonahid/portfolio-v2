import { createContext } from "react";

const apiUrl = process.env.API_URL;

export const ApiVariableContext = createContext(apiUrl);

export const ApiVariable: React.FC = ({ children }) => {
  return (
    <ApiVariableContext.Provider value={apiUrl}>
      {children}
    </ApiVariableContext.Provider>
  );
};
