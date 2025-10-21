import { useDispatch, useSelector } from 'react-redux';
import { decrement, increament } from '../../store/slices/counterSlice';
import type { Rootstate } from '../../store/store';
const Counter = () => {
    const count=useSelector((state:Rootstate)=>state.coun.value)
    const dispatch=useDispatch();
  return (
    <>
        <div className='text-orange-300'>Counter: {count}</div>
        <button onClick={()=>dispatch(increament())}>Plus</button>
        <button onClick={()=>dispatch(decrement())}>Minus</button>
    </>
    
  )
}

export default Counter