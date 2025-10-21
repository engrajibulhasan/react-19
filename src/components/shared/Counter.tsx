import { useSelector } from 'react-redux';
import type { Rootstate } from '../../store/store';
const Counter = () => {
    const count=useSelector((state:Rootstate)=>state.coun.value)
  return (
    <div className='text-orange-300'>Counter: {count}</div>
  )
}

export default Counter