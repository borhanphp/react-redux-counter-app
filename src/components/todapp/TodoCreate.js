import React from 'react'

const TodoCreate = () => {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-10'>
                    <input type='text' className='form-control'/>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-success'>Add To List</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodoCreate