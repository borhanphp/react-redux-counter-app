import React, {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increament, decreament, customInput } from '../../redux/state/counter/counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    const customNumber = useRef();
  return (
    
        <div className='card'>
            <div className='card-header bg-secondary'>
                <h4 className='text-white text-center'>Counter App</h4>
            </div>

            <div className='card-body'>
                <h1>{count}</h1>
                <div className='my-4'>
                    <button className='btn btn-success' onClick={() => {dispatch(increament())}}>Increase</button>
                    <button className='btn btn-danger mx-2' onClick={() => {dispatch(decreament())}}>Decrease</button>
                </div>

                <div className='my-4'>
                    <input ref={customNumber} className='form-control' type='number'/>
                    <button className='btn btn-secondary mx-2' onClick={() => {dispatch(customInput(customNumber.current.value))}}>Set Number</button>
                </div>
            </div>
        </div>
   
  )
}

export default Counter