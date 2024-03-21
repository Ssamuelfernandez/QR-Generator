import { useCodeGenerator } from "../hooks/useCodeGenerator";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {


    const { qrImage, download, updateQRCode } = useCodeGenerator();



  return (
    <AppContext.Provider
    value={{
        qrImage, 
        download, 
        updateQRCode,
    }}>
        {children}
    </AppContext.Provider>
  );
};
