import QRCodeStyling from "nvp-qr-code-styling";
import { useEffect, useRef, useState } from "react";

export const useCodeGenerator = () => {

  const [qrImage, setQrImage] = useState(null);
  

  const options = {
    width: 300,
    height: 300,
    type: "svg",
    data: "https://www.linkedin.com/in/samuelfern%C3%A1ndezsep%C3%BAlveda/",
    image: "",
    dotsOptions: {
      color: "#4267b2",
      type: "rounded"
    },
    backgroundOptions: {
      color: "#e9ebee",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 20
    }
  };
const qrCode = useRef(new QRCodeStyling(options));

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

  // Función para actualizar el código QR
  const updateQRCode = (newOptions) => {
    qrCode.current.update( newOptions );
    generateQRCode();
  };


useEffect(() => {
    generateQRCode();
  }, []);


  return { download, qrImage, updateQRCode }

};