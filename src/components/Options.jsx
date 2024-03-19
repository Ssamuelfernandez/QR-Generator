import { CornersSquare } from "./qrOptions/CornersSquare";
import { Dots } from "./qrOptions/Dots";


const options = [
  { name: 'Dots options', component: <Dots /> },
  { name: 'Corners square options', component: <CornersSquare /> },
  { name: 'Corners dot options', component: <div>Contenido</div> },
  { name: 'Background options', component: <div>Contenido</div> },
  { name: 'Logo option', component: <div>Contenido</div> },
];

export const QrOptions = () => {
  return (
    <>
      <div className="accordion w-100 m-auto" id="accordionExample">
        {options.map((option, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                {option.name}
              </button>
            </h2>
            <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {option.component}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
