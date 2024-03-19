import { useState } from "react";
import { useCodeGenerator } from "../hooks/useCodeGenerator";

export const DisplayQr = ({qrImage, download}) => {
  const [fileExtension, setFileExtension] = useState('png');
  const [fileName, setFileName] = useState('');

  const handleDownload = () => {
    const finalFileName = fileName || 'QrCode';
    download(finalFileName, fileExtension);
    setFileName('');
  }

  const handleSelectChange = (event) => {
    setFileExtension(event.target.value);
  }

  const handleInputChange = (event) => {
    setFileName(event.target.value);
  }

  return (
    <>
      <div className="container d-flex flex-column gap-4 align-items-center justify-content-center bg-body h-100 rounded-4 ">

        <h3 className='m-3 m-auto'>QR Code Generator</h3>

        <div className="d-flex align-items-center justify-content-center m-auto" style={{ width: '300px', height: '300px' }}>
          {qrImage ? <img src={qrImage} alt="QR Code" style={{ maxWidth: '100%', maxHeight: '100%' }} /> : <i className="fa-solid fa-qrcode"></i>}
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center gap-2 m-auto">
          <div className="d-flex gap-4">

            <button onClick={handleDownload} className="btn border-2 btn-outline-secondary">Download</button>

            <select onChange={handleSelectChange} className="form-select" aria-label="Select extension" defaultValue="png">
              <option value="png">.png</option>
              <option value="jpeg">.jpeg</option>
              <option value="svg">.svg</option>
            </select>
          </div>

          <div>
            <input
              className="form-control "
              placeholder="File name"
              aria-describedby="inputNameHelp"
              value={fileName}
              onChange={handleInputChange}
            />
            <div id="inputNameHelp" className="form-text">
              Enter a file name. (Optional)
            </div>
          </div>
        </div>




      </div>

    </>
  )
}
