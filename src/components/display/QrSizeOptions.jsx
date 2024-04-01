import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const QrSizeOptions = () => {
    const { updateOption } = useContext(AppContext);

    const handleSizeChange = (event) => {
        const width = event.target.value
        const height = event.target.value
        updateOption('width', width);
        updateOption('height', height);
    };

    const handleMarginChange = (event) => {
        const margin = event.target.value
        updateOption('margin', margin);
    };

    const handleCorrectionChange = (event) => {
        const errorCorrectionLevel = event.target.value;
        updateOption('qrOptions', { errorCorrectionLevel });
    };
    

    return (
        <>
            <div className="container d-flex flex-column text-center gap-2">

                <div className="d-flex gap-2">

                    <div className="form-group w-50">
                        <label htmlFor="sizeInput">Size</label>
                        <input type="number" className="form-control" id="sizeInput" onChange={handleSizeChange} defaultValue="300" min="0" />
                    </div>


                    <div className="form-group w-50">
                        <label htmlFor="marginInput">Margin</label>
                        <input type="number" className="form-control" id="marginInput" onChange={handleMarginChange} defaultValue="0" min="0" />
                    </div>

                </div>


                <div className="d-flex flex-column align-items-center justify-content-center">
                    <select onChange={handleCorrectionChange} className="form-select" aria-label="Select error level" defaultValue="Q">
                        <option value="L">Low</option>
                        <option value="M">Medium</option>
                        <option value="Q">Quantile</option>
                        <option value="H">Hight</option>
                    </select>

                </div>
            </div>



        </>
    )
}
