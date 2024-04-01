
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';

export const Phone = () => {

    const { updateOption, defaultOptions } = useContext(AppContext);

    const [prefix, setPrefix] = useState('');
    const [number, setNumber] = useState('');

    useEffect(() => {
        if (prefix !== '' && number !== '') {
            updateOption('data', `tel:+${prefix}${number}`);
        } else {
            updateOption('data', defaultOptions.data);
        }
    }, [prefix, number]);

    const handlePrefixChange = (event) => {
        setPrefix(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    return (
        <>
            <div className='py-4 '>
                <h3 htmlFor="inputPrefix" className="form-label pb-4">Generate Phone Number </h3>
                <div className='d-flex gap-2'>
                    <input
                        className="form-control shadow"
                        placeholder="Prefix"
                        aria-describedby="inputPrefixHelp"
                        value={prefix}
                        onChange={handlePrefixChange}
                    />

                    <input
                        className="form-control shadow"
                        placeholder="Number"
                        aria-describedby="inputNumberHelp"
                        value={number}
                        onChange={handleNumberChange}
                    />
                </div>
                <div className="form-text">
                    Generate a QR code directly from a phone number.
                </div>


            </div>

        </>
    )
}

