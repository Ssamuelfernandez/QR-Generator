import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

export const GradientColor = ({optionName, gradientOptions}) => {
  const { updateOption } = useContext(AppContext);


  const [gradientSwitch, setGradientSwitch] = useState('linear');

  const handleGradientTypeChange = (event) => {
    setGradientSwitch(event.target.checked ? 'radial' : 'linear');
    updateOption(optionName, { ...gradientOptions, gradient: { ...gradientOptions.gradient, type: event.target.checked ? 'radial' : 'linear' } });
  };

  const handleGradientColorChange = (event, index) => {
    const newColorStops = [...gradientOptions.gradient.colorStops];
    newColorStops[index].color = event.target.value;
    updateOption(optionName, { ...gradientOptions, gradient: { ...gradientOptions.gradient, colorStops: newColorStops } });
  };

  const handleGradientRotationChange = (event) => {
    updateOption(optionName, { ...gradientOptions, gradient: { ...gradientOptions.gradient, rotation: event.target.value } });
  };


  return (
    <div className="d-flex align-items-center justify-content-around p-2">


      <div className="form-check form-switch d-flex gap-2">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleGradientTypeChange} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{gradientSwitch} gradient</label>
      </div>

      <div className="d-flex gap-2 align-items-center justify-content-center">
        <label htmlFor="customRange1" className="form-label">Rotation</label>
        <input type="range" className="form-range" id="customRange1" onChange={handleGradientRotationChange}></input>
      </div>

      <div className="d-flex gap-2 align-items-center justify-content-center ">
        <label htmlFor="exampleColorInput1" className="form-label">Gradient color</label>
        <input type="color" className="form-control form-control-color" id="exampleColorInput1" value={gradientOptions.gradient.colorStops[0].color} title="Choose your color" onChange={(event) => handleGradientColorChange(event, 0)}></input>
        <input type="color" className="form-control form-control-color" id="exampleColorInput2" value={gradientOptions.gradient.colorStops[1].color} title="Choose your color" onChange={(event) => handleGradientColorChange(event, 1)}></input>
      </div>


    </div>
  )
}
