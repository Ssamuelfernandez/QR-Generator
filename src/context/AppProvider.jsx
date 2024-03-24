import { useCodeGenerator } from "../hooks/useCodeGenerator";
import { AppContext } from "./AppContext";


export const AppProvider = ({ children }) => {

  const { qrImage, download, updateOption, defaultOptions } = useCodeGenerator();

  return (
    <AppContext.Provider
      value={{
        qrImage,
        download,
        updateOption,
        defaultOptions,
      }}>
      {children}
    </AppContext.Provider>
  );
};
