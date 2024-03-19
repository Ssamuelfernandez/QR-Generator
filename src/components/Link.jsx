import { useEffect, useState } from 'react';

export const Link = ({updateQRCode}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        if (inputValue) {
            updateQRCode({ data : inputValue });
        }
    }, [inputValue]);

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

