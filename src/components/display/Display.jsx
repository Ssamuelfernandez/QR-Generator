import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Dowload } from "./Dowload"

export const DisplayQr = () => {
  const { qrImage } = useContext(AppContext);

  return (
    <>
      <div className="container d-flex flex-column gap-1 align-items-center justify-content-center bg-body h-100 rounded-4 ">

        <h3 className='m-3 m-auto'>QR Code Generator</h3>

        <div className="d-flex align-items-center justify-content-center m-auto" style={{ width: '250px', height: '250px' }}>
          {qrImage ? <img src={qrImage} alt="QR Code" style={{ maxWidth: '100%', maxHeight: '100%' }} /> : <i className="fa-solid fa-qrcode"></i>}
        </div>

        <p>Aquí el tamaño y margen</p>
        <p>Aquí subida logo y fondo tras logo</p>
        <p>Grado de error en el qr (?)</p>

        <Dowload />

      </div>

    </>
  )
}
