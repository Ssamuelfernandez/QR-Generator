import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Dowload } from "./Dowload"
import { QrSizeOptions } from "./QrSizeOptions";
import { LogoOptions } from "./LogoOptions";

export const DisplayQr = () => {
  const { qrImage } = useContext(AppContext);

  return (
    <>
      <div className="container shadow h-100 d-flex flex-column gap-4 align-items-center justify-content-between bg-body rounded-4 pt-4 px-4">


        <div className="py-2" style={{ maxWidth: '400px', maxHeight: '400px' }}>
          {qrImage ? <img src={qrImage} alt="QR Code" style={{ maxWidth: '100%', maxHeight: '100%' }} /> : <i className="fa-solid fa-qrcode"></i>}
        </div>

        <QrSizeOptions />

        <LogoOptions />

        <Dowload />

        <p className="madeBy">Made with <i className="fa-solid fa-heart"></i> by <a href="https://github.com/Ssamuelfernandez">Ssamuelfernandez</a></p>

      </div>

    </>
  )
}
