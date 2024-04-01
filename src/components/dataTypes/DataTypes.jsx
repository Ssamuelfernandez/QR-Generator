import { Type } from "./Type";

export const DataTypes = ({setSelectedType, selectedType}) => {
  const icons = [
    {icon: 'fa-solid fa-link', name: 'Link'},
    {icon: 'fa-solid fa-envelope', name: 'Email'},
    {icon: 'fa-solid fa-phone-volume', name: 'Phone'},
  ];

  return (
    <>
      <div className="d-flex justify-content-center gap-2 py-3 ">
        {icons.map((icon, index) => (
          <Type key={index} type={<i className={icon.icon}></i>} name={icon.name} onClick={() => setSelectedType(icon.name)} isSelected={selectedType === icon.name}/>
        ))}
      </div>
    </>
  )
}

