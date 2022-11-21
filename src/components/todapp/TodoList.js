import React from 'react'

const TodoList = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <table className='table'>
                    <thead>
                        <th>SL</th>
                        <th>ToDo</th>
                        <th>Action</th>
                    </thead>

                    <tbody>
                        <td>1</td>
                        <td>todo</td>
                        <td>
                            <button  className='btn bg-secondary text-white'>edit</button>
                            <button className='btn bg-danger text-white'>delete</button>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default TodoList