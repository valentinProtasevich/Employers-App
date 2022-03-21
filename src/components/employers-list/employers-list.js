import EmployersListItem from '../employers-list-item/employers-list-item';
import './emloyers-list.css';

const EmployersList = ({data, onDelet, onToggleProp}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;

    return (
      <EmployersListItem 
        key={id} 
        {...itemProps}
        onDelet={() => onDelet(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployersList;