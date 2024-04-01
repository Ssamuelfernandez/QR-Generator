import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { ColorDots } from "./ColorDots";

export const NormalColor = ({ optionName }) => {
  const { updateOption, defaultOptions } = useContext(AppContext);
  const [color, setColor] = useState({ color: defaultOptions[optionName].color });

  const handleColorChange = (event) => {
    setColor({ color: event.target.value });
    updateOption(optionName, { color: event.target.value });
  };

  return (
    <>
      <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center p-2">

        <label htmlFor="exampleColorInput" className="form-label">Dots color</label>
        <input type="color" className="form-control form-control-color" id="exampleColorInput" value={color.color} title="Choose your color" onChange={handleColorChange}></input>

        <ColorDots optionName={optionName} />

      </div>
    </>
  )
}

