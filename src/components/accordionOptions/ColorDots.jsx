import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const ColorDots = ({optionName}) => {
    const { updateOption } = useContext(AppContext);
    const colors = ['#FFD1DC', '#A2CFFE', '#77DD77', '#FDFD96', '#B39EB5', '#FFE5B4'];
  
    const handleDotClick = (color) => {
      updateOption(optionName, { color });
    };
  
    return (
      <div className="d-flex gap-2">
        {colors.map((color, index) => (
          <div key={index} className="rounded-circle" style={{ backgroundColor: color, width: '30px', height: '30px', cursor: 'pointer' }} onClick={() => handleDotClick(color)}></div>
        ))}
      </div>
    );
}
