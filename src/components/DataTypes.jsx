import { Type } from "./Type";


export const DataTypes = ({setSelectedType}) => {
  const icons = [
    {icon: 'fa-solid fa-link', name: 'Link'},
    {icon: 'fa-solid fa-envelope', name: 'Email'},
    {icon: 'fa-solid fa-phone-volume', name: 'Phone'},
    {icon: 'fa-solid fa-comment', name: 'Text'},
  ];

  return (
    <>
      <div className="d-flex gap-2 m-auto">
        {icons.map((icon, index) => (
          <Type key={index} type={<i className={icon.icon}></i>} name={icon.name} onClick={() => setSelectedType(icon.name)} />
        ))}
      </div>
    </>
  )

}

