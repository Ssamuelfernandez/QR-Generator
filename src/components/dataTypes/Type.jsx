export const Type = ({type, name, onClick, isSelected}) => {
  return (
    <button onClick={onClick} className={`btn shadow ${isSelected ? 'btn-secondary' : 'btn-outline-secondary'} border-2`} style={{width: '120px'}}>{type} {name}</button>
  )
}
