import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';

export const Link = () => {

    const { updateOption, defaultOptions } = useContext(AppContext);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        if (value !== '') {
            updateOption('data', value);
        } else {
            updateOption('data', defaultOptions.data);
        }
    };
    

    return (
        <>
            <h3 htmlFor="inputLink" className="form-label">Submit URL</h3>

            <input
                id="inputLink"
                className="form-control"
                placeholder="https://"
                aria-describedby="inputLinkHelp"
                value={inputValue}
                onChange={handleInputChange}
            />

            <div id="inputLinkHelp" className="form-text">
                Generate a QR code directly from a URL.
            </div>

        </>
    )
}

