import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

export const Dowload = () => {
  const { download } = useContext(AppContext);
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
  )
}
