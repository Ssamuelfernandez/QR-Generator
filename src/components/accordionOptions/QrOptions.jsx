import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { NormalColor } from "./NormalColor";
import { GradientColor } from "./GradientColor";


export const QrOptions = ({ property }) => {
    const { updateOption } = useContext(AppContext);
    const [dotsSwitch, setDotsSwitch] = useState('Normal');

    const [ gradientOptions, setGradientOptions ] = useState({
        gradient: { 
            type: 'linear', 
            rotation: 0, 
            colorStops: [{ offset: 0, color: '#5f9ea0' }, { offset: 1, color: '#5f69a0' }] 
        }
    });

    const handleSwitchChange = (event) => {
        const isGradient = event.target.checked;
        setDotsSwitch(isGradient ? 'Gradient' : 'Normal');

        if (isGradient) {
            updateOption(property.name, gradientOptions);
        } else {
            updateOption(property.name, { gradient: null });
        }

    };

    const handleSelectChange = (event) => {
        updateOption(property.name, { type: event.target.value });
    }

    return (
        <>
            <div className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center justify-content-around">
                    <div className="form-check form-switch d-flex gap-2">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleSwitchChange} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{dotsSwitch} color</label>
                    </div>

                    {property.type
                        ?
                        <select onChange={handleSelectChange} className="form-select w-25" aria-label="Select extension" defaultValue="square">
                            {property.type.map((typeOption, index) => (
                                <option key={index} value={typeOption}>{typeOption}</option>
                            ))}
                        </select>
                        :
                        <select style={{ visibility: 'hidden' }} className="form-select w-25" />

                    }

                </div>

                {dotsSwitch === 'Normal' ?
                    <NormalColor optionName={property.name} />
                    :
                    <GradientColor optionName={property.name} gradientOptions={gradientOptions} />
                }
            </div>
        </>
    );
};

