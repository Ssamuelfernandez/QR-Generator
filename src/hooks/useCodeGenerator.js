import QRCodeStyling from "nvp-qr-code-styling";
import { useEffect, useRef, useState } from "react";

export const useCodeGenerator = () => {

  const [qrImage, setQrImage] = useState(null);

  // Opciones por defecto para el código QR
  const defaultOptions = {
    width: 300,
    height: 300,
    type: "svg",
    data: "https://www.linkedin.com/in/samuelfern%C3%A1ndezsep%C3%BAlveda/",
    image: "linkedin.svg",
    margin: "",
    qrOptions: { errorCorrectionLevel: 'Q'},
    dotsOptions: { type: 'square', color: '#A8BCBD', gradient: null },
    cornersSquareOptions: { type: 'square', color: '#333333', gradient: null },
    cornersDotOptions: { type: 'square', color: '#333333', gradient: null },
    backgroundOptions: { color: '#ffffff', gradient: null }
  };

  const [formOptions, setFormOptions] = useState(defaultOptions);

  const qrCode = useRef(new QRCodeStyling(formOptions));

  // Función para actualizar el código QR
  const updateOption = (optionName, newValues) => {
    setFormOptions(prevOptions => {
      if (typeof prevOptions[optionName] === 'object' && prevOptions[optionName] !== null) {
        return {
          ...prevOptions,
          [optionName]: {
            ...prevOptions[optionName],
            ...newValues
          }
        };
      } else {
        return {
          ...prevOptions,
          [optionName]: newValues
        };
      }
    });
  };

  useEffect(() => {
    qrCode.current.update(formOptions);
    generateQRCode();
  }, [formOptions]);

  // Usar el método getRawData para obtener los datos en bruto del código QR
  const generateQRCode = async () => {
    try {
      const data = await qrCode.current.getRawData("png");
      const blob = new Blob([data], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      setQrImage(url);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  // Usar el método download para descargar el código QR
  const download = (name, extension) => {
    qrCode.current.download({ name, extension });
  };

  return { download, qrImage, updateOption, defaultOptions }

};