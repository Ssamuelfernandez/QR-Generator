import { useState } from "react";

export const Normalcolor = () => {
  const [dotsOptions, setDotsOptions] = useState({ type: 'square', color: '#527489' });

  const handleSelectChange = (event) => {
    setDotsOptions(prevState => ({ ...prevState, type: event.target.value }));
}

const handleColorChange = (event) => {
    setDotsOptions(prevState => ({ ...prevState, color: event.target.value }));
}



  return (
    <div className="d-flex gap-2 align-items-center justify-content-center p-2">

      <label htmlFor="exampleColorInput" className="form-label">Dots color</label>
      <input type="color" className="form-control form-control-color" id="exampleColorInput" value={dotsOptions.color} title="Choose your color" onChange={handleColorChange}></input>

      <select onChange={handleSelectChange} className="form-select w-25" aria-label="Select extension" defaultValue="rounded">

        <option value="rounded">Rounded</option>
        <option value="dots">Dots</option>
        <option value="classy">Classy</option>
        <option value="classy-rounded">Classy-rounded</option>
        <option value="square">Square</option>
        <option value="extra-rounded">Extra-rounded</option>

      </select>
    </div>
  )
}
