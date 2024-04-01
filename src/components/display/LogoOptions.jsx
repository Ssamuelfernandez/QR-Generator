import { useContext, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";

export const LogoOptions = () => {
    const { updateOption, defaultOptions } = useContext(AppContext);
    const [logoFile, setLogoFile] = useState(null);
    const fileInputRef = useRef();

    const handleHideLogoChange = (event) => {
        const hideLogo = event.target.checked;
        updateOption('imageOptions', { hideBackgroundDots: !hideLogo });
    };

    const handleLogoFileChange = (event) => {
        const file = event.target.files[0];
        setLogoFile(file);

        const reader = new FileReader();

        reader.onloadend = () => {
            updateOption('image', reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const deleteFile = () => {
        setLogoFile(null);
        updateOption('image', null);
    };

    const handleOpenFileDialog = () => {
        fileInputRef.current.click();
    };


    const handleMarginLogoChange = (event) => {
        const marginLogo = event.target.value;
        updateOption('imageOptions', { margin: marginLogo });
    };

    const handleLogoSizeChange = (event) => {
        const logoSize = event.target.value;
        updateOption('imageOptions', { imageSize: logoSize });
    };



    return (
        <>
            <div className="container d-flex flex-column gap-2">
                <div className="d-flex gap-2">

                    <div className="form-group w-50">
                        <label htmlFor="sizeInput">Logo size</label>
                        <input type="number" className="form-control" id="sizeInput" onChange={handleLogoSizeChange} defaultValue="0.4" min="0.1" max="0.5" step="0.1" />
                    </div>

                    <div className="form-group w-50">
                        <label htmlFor="marginInput">Margin logo</label>
                        <input type="number" className="form-control" id="marginInput" onChange={handleMarginLogoChange} defaultValue="0" min="0" />
                    </div>

                </div>

                <div className="d-flex gap-2">
                    <input ref={fileInputRef} style={{ display: 'none' }} type="file" onChange={handleLogoFileChange} />
                    <button onClick={handleOpenFileDialog} className="btn btn-outline-secondary d-flex justify-content-center align-items-center gap-2 w-50">Upload<i className="fa-solid fa-file-arrow-up fa-xl"></i></button>
                    <button onClick={deleteFile} className="btn btn-outline-danger d-flex justify-content-center align-items-center gap-2 w-50">Delete<i className="fa-solid fa-trash-can fa-xl"></i></button>
                </div>

                <div className="form-check d-flex gap-2">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleHideLogoChange} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">Hide background logo</label>
                </div>
            </div>
        </>
    )
}
