
export const Type = ({type, name, onClick}) => {
    
  return (

    <button onClick={onClick} className="btn btn-outline-secondary border-2" style={{width: '100px'}}>{type} {name}</button>

  )
}
