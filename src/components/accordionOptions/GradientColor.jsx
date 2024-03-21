
export const GradientColor = () => {
  const [dotsOptions, setDotsOptions] = useState({ gradient: { type: 'linear', rotation: 0, colorStops: [{ offset: 0, color: '#5f9ea0' }, { offset: 1, color: '#5f69a0' }]}});

  const handleGradientTypeChange = (event) => {
    setGradientSwitch(event.target.checked ? 'Radial' : 'Linear');
    setDotsOptions(prevState => ({ ...prevState, gradient: { ...prevState.gradient, type: event.target.value } }));
}

const handleGradientColorChange = (event, index) => {
    setDotsOptions(prevState => {
        const newColorStops = [...prevState.gradient.colorStops];
        newColorStops[index] = event.target.value;
        return { ...prevState, gradient: { ...prevState.gradient, colorStops: newColorStops } };
    });
}

const handleGradientRotationChange = (event) => {
    setDotsOptions(prevState => ({ ...prevState, gradient: { ...prevState.gradient, rotation: event.target.value } }));
}


  return (
    <div className="d-flex align-items-center justify-content-around p-2">


      <div className="form-check form-switch d-flex gap-2">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleGradientTypeChange} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{gradientSwitch} gradient</label>
      </div>

      <div className="d-flex gap-2 align-items-center justify-content-center ">
        <label htmlFor="exampleColorInput1" className="form-label">Gradient color</label>
        <input type="color" className="form-control form-control-color" id="exampleColorInput1" value={dotsOptions.gradient.colorStops[0]} title="Choose your color" onChange={(event) => handleGradientColorChange(event, 0)}></input>
        <input type="color" className="form-control form-control-color" id="exampleColorInput2" value={dotsOptions.gradient.colorStops[1]} title="Choose your color" onChange={(event) => handleGradientColorChange(event, 1)}></input>
      </div>

      <div className="d-flex gap-2 align-items-center justify-content-center">
        <label htmlFor="customRange1" className="form-label">Rotation</label>
        <input type="range" className="form-range" id="customRange1" onChange={handleGradientRotationChange}></input>
      </div>

    </div>
  )
}
