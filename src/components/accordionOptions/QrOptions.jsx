import { useContext, useState } from "react";
import { Normalcolor } from "./NormalColor";
import { GradientColor } from "./GradientColor";
import { AppContext } from "../../context/AppContext";

export const QrOptions = ({property}) => {
    const { updateQRCode } = useContext(AppContext);
    const [dotsSwitch, setDotsSwitch] = useState('Normal');

    const handleSwitchChange = (event) => {
        setDotsSwitch(event.target.checked ? 'Gradient' : 'Normal');
    }

  return (
    <>

            <div className="form-check form-switch d-flex gap-2">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleSwitchChange} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{dotsSwitch} color</label>
            </div>

            {dotsSwitch === 'Normal' ?

                <Normalcolor />
                :
                <GradientColor />
            }
        </>
  );
};
