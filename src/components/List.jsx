import { useSelector } from 'react-redux';
import Tarea from './Tarea.jsx';
// import Item from './Item';


export default function List() {
  const state = useSelector(state => state.lista)
  const values = [...state]
  return (
    <div className='container-list flex flex-col'>
      {values.map((item, index) => {
        const changeColor = index % 2 == 0 ? 'odd' : 'even';

        return <div className={`${changeColor}`} key={index}> <Tarea item={item} /> </div>
      }

      )}
    </div>
  )
}

