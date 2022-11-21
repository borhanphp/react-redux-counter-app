import React from 'react'
import TodoCreate from '../components/todapp/TodoCreate'
import TodoList from '../components/todapp/TodoList'

const TodoPage = () => {
  return (
    <div className='container'>
            <div className='row'>
                <div className='card'>
                    <div className='card-head'>
                       <h3>Todo App with React-Redux</h3>
                    </div>

                    <div className='card-body'>
                      <TodoCreate/>
                      <TodoList/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TodoPage