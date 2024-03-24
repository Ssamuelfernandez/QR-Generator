import { QrOptions } from "./QrOptions";

export const Accordion = () => {

  const options = [
    { name: 'Dots options', property: {name: 'dotsOptions', type: ['rounded', 'dots', 'classy', 'classy-rounded', 'square', 'extra-rounded']} },
    { name: 'Corners square options', property: {name: 'cornersSquareOptions', type: ['dot', 'square', 'extra-rounded']} },
    { name: 'Corners dot options', property: {name: 'cornersDotOptions', type: ['dot', 'square']} },
    { name: 'Background options', property: {name: 'backgroundOptions'} },
  ];

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

              <QrOptions property={option.property} />
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
